import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Contact form endpoint: validates the submission and emails it through Gmail.
// Needs GMAIL_USER, GMAIL_APP_PASSWORD and CONTACT_TO in the Vercel project settings.

const TOPICS = ['New project', 'Ongoing work', 'Full-time role'];
const LIMITS = { name: 100, email: 150, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort limit per warm instance: 5 messages per IP per 10 minutes
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  // Honeypot filled in: pretend success so bots move on
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const message = clean(body.message, LIMITS.message);
  const topic = TOPICS.includes(body.topic as string) ? (body.topic as string) : TOPICS[0];

  if (!name || !message || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please fill in your name, a valid email and a message.' });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many messages. Please try again in a few minutes.' });
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Contact form: GMAIL_USER / GMAIL_APP_PASSWORD not set');
    return res.status(500).json({ error: 'The contact form is not configured yet.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD.replace(/\s+/g, '') },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio contact" <${GMAIL_USER}>`,
      to: CONTACT_TO || GMAIL_USER,
      replyTo: { name, address: email },
      subject: `[Portfolio] ${topic}: ${name}`,
      text: `Topic: ${topic}\nName: ${name}\nEmail: ${email}\n\n${message}\n`,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form: send failed', error);
    return res.status(502).json({ error: 'Could not send the email.' });
  }
}
