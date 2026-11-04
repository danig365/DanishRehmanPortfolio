import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ExternalLink, Github, Linkedin, Mail, CheckCircle, AlertCircle, Loader, MessageCircle, FileDown, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio';
import BackgroundVideo from './BackgroundVideo';

const topics = ['New project', 'Ongoing work', 'Full-time role'];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', topic: topics[0], website: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: real visitors never see or fill the "website" field
    if (formData.website) {
      setStatus('success');
      return;
    }
    setStatus('sending');
    setErrorMessage('');

    try {
      // Sent by the serverless function in api/contact.ts
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${response.status})`);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '', topic: topics[0], website: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      setErrorMessage(`Couldn't send your message. Please email me at ${personalInfo.email} or message me on WhatsApp.`);
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundVideo
          src="/videos/contact.mp4"
          poster="/videos/contact-poster.webp"
          fallback="/images/contact-bg.webp"
          className="w-full h-full object-cover opacity-[0.12] dark:opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/70 via-transparent to-[#f0f4f8]/70 dark:from-[#080c12]/80 dark:via-transparent dark:to-[#080c12]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// get in touch"
          title="Let's Work Together"
          description="Tell me about your project or role. I usually reply on WhatsApp the same day."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl glass-panel glass-shine">
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4">Preferred Method</h3>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl glass-subtle hover:bg-white/[0.05] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 dark:text-white font-medium">WhatsApp</p>
                    <p className="text-slate-500 dark:text-gray-400 text-sm">Usually same-day reply · {personalInfo.phone}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 dark:text-gray-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </a>
              </div>

              <div className="p-6 rounded-2xl glass-panel glass-shine">
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4">Other Channels</h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: FileDown, label: 'CV', value: 'Download PDF', href: personalInfo.cv },
                    { icon: Github, label: 'GitHub', value: personalInfo.github.replace('https://', '').replace('http://', '').replace(/\/$/, ''), href: personalInfo.github },
                    { icon: Linkedin, label: 'LinkedIn', value: personalInfo.linkedin.replace('https://', '').replace('http://', '').replace(/\/$/, ''), href: personalInfo.linkedin },
                  ].map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      {...(channel.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : channel.label === 'CV'
                          ? { download: true }
                          : {})}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg glass-badge flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                        <channel.icon className="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 dark:text-gray-500">{channel.label}</p>
                        <p className="text-sm text-slate-700 dark:text-gray-300">{channel.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="flex items-center gap-2 mt-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] text-sm text-slate-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  {personalInfo.address} · UTC+5 · Remote worldwide
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="p-6 lg:p-8 rounded-2xl glass-panel glass-shine">
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-6">Send a Message</h3>

              <div className="space-y-5">
                <fieldset>
                  <legend className="block text-sm text-slate-400 dark:text-gray-500 mb-2 font-mono">{'>'} reaching out about</legend>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <label
                        key={topic}
                        className={`px-3.5 py-2 rounded-xl text-sm cursor-pointer transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sky-400 ${
                          formData.topic === topic
                            ? 'bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12]'
                            : 'glass-subtle text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="topic"
                          value={topic}
                          checked={formData.topic === topic}
                          onChange={() => setFormData({ ...formData, topic })}
                          className="sr-only"
                        />
                        {topic}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Honeypot field, hidden from people and screen readers */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 dark:text-gray-500 mb-2 font-mono">
                    {'>'} name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none font-mono text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 dark:text-gray-500 mb-2 font-mono">
                    {'>'} email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={150}
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none font-mono text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 dark:text-gray-500 mb-2 font-mono">
                    {'>'} message
                  </label>
                  <textarea
                    id="message"
                    required
                    maxLength={5000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none font-mono text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all backdrop-blur-sm ${
                    status === 'success'
                      ? 'bg-green-600 dark:bg-green-500 text-white'
                      : status === 'error'
                      ? 'bg-red-600 dark:bg-red-500 text-white'
                      : status === 'sending'
                      ? 'bg-slate-600 dark:bg-slate-400 text-white cursor-not-allowed'
                      : 'bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] hover:bg-slate-800 dark:hover:bg-white hover:shadow-lg hover:shadow-white/10'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {status === 'error' && errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 dark:text-red-400 text-sm text-center mt-2"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400 text-sm text-center mt-2"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
