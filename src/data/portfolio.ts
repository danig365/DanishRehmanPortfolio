import {
  Code2, Smartphone, Database, Globe, Layers, Zap, Server
} from 'lucide-react';

export const personalInfo = {
  name: 'Danish Rehman',
  title: 'Full Stack Web Developer',
  tagline: 'Building Scalable Web Applications',
  bio: `I'm a full stack developer from Pakistan with a BS in Computer Science from the University of the Punjab. I started freelancing in 2024, and since then I've built production systems end to end, from requirements and database design to deployment and support.

Today I work as a Software Engineer at Cognisol Technologies, where I'm the sole developer of the CogniPulse healthcare platform, and I run my own studio, PrimeCurve Solutionz, where I'm building a behavioural health EHR for a US provider. I care about software that is secure, well tested and easy for real people to use, and about clear communication with the people I build for. I'm open to full-time remote roles and to freelance projects.`,
  github: 'https://github.com/danig365/',
  linkedin: 'https://www.linkedin.com/in/danish-rehman-34788624b/',
  email: 'gdanish365@gmail.com',
  phone: '+92 324 9567570',
  whatsapp: 'https://wa.me/923249567570',
  address: 'Gujranwala, Pakistan',
  cv: '/Danish-Rehman-CV.pdf',
};

export const roles = [
  'Full Stack Developer',
  'Django + React Developer',
  'React Native Developer',
  'SaaS & EHR Builder',
  'Founder @ PrimeCurve Solutionz',
];

// Each skill lists the project tech names that count as using it, so the
// "N projects" figure on the site is derived from the projects below.
export const skillGroups = [
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Python', match: ['Django', 'Django 5'] },
      { name: 'Django', match: ['Django', 'Django 5'] },
      { name: 'Django REST Framework', match: ['Django REST Framework'] },
      { name: 'Node.js', match: ['Node.js'] },
      { name: 'Express', match: ['Express'] },
      { name: 'Celery', match: ['Celery'] },
      { name: 'Redis', match: ['Redis'] },
      { name: 'WebSockets / Channels', match: ['WebSockets', 'Django Channels'] },
    ],
  },
  {
    title: 'Frontend & Mobile',
    icon: Code2,
    skills: [
      { name: 'React', match: ['React', 'React 18'] },
      { name: 'React Native', match: ['React Native'] },
      { name: 'TypeScript', match: ['TypeScript'] },
      { name: 'JavaScript (ES6+)', match: [] },
      { name: 'Tailwind CSS', match: ['Tailwind CSS'] },
      { name: 'Mantine', match: ['Mantine'] },
      { name: 'TanStack Query', match: ['TanStack Query'] },
    ],
  },
  {
    title: 'Integrations & AI',
    icon: Zap,
    skills: [
      { name: 'Stripe', match: ['Stripe'] },
      { name: 'OpenAI / Claude APIs', match: ['OpenAI API', 'Claude / OpenAI'] },
      { name: 'LiveKit', match: ['LiveKit'] },
      { name: 'WebRTC', match: ['WebRTC'] },
      { name: 'Vonage (IVR / SMS)', match: ['Vonage'] },
      { name: 'Google Calendar API', match: ['Google Calendar API'] },
      { name: 'Deepgram', match: ['Deepgram'] },
      { name: 'CCBill', match: ['CCBill'] },
      { name: 'Leaflet maps', match: ['Leaflet'] },
    ],
  },
  {
    title: 'Database, DevOps & Quality',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', match: ['PostgreSQL', 'PostgreSQL 16'] },
      { name: 'Schema design & migrations', match: [] },
      { name: 'Linux VPS', match: [] },
      { name: 'Nginx', match: ['Nginx', 'Nginx + Gunicorn'] },
      { name: 'Docker', match: ['Docker'] },
      { name: 'Git', match: [] },
      { name: 'Playwright', match: ['Playwright'] },
      { name: 'pytest', match: [] },
    ],
  },
];

export const alsoWorkedWith = ['Next.js', 'Supabase', 'Firebase'];

export interface Project {
  title: string;
  tagline: string;
  role: string;
  client: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
  status: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  platforms: string[];
}

export const projects: Project[] = [
  {
    title: 'CogniPulse',
    tagline: 'Multi-clinic healthcare appointment platform',
    role: 'Software Engineer · sole full-stack developer',
    client: 'Cognisol Technologies',
    period: 'Sep 2025 – present',
    summary:
      'A healthcare SaaS where clinics manage doctors, staff, services and appointments, and patients book online or by phone. Built end to end by me, working with the project manager and CTO.',
    highlights: [
      'Three roles: clinic admins (full clinic view, staff, doctors, services, appointments, marketing), doctors (availability slots, schedules) and patients',
      'Phone booking via Vonage: voice-menu (IVR) booking, SMS confirmations and reminders, OTP verification',
      'Time-zone-safe scheduling so slots, bookings and reminders stay correct for clinics, doctors and patients',
      'Asynchronous reminders and notifications with Celery and Redis',
      'Deployed and maintained on a Linux VPS',
    ],
    tech: ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Celery', 'Redis', 'Vonage', 'Linux VPS'],
    status: 'Live · two clinics onboarded · code private (company property)',
    image: '/images/projects/cognipulse.webp',
    liveUrl: 'https://cognipulse.us',
    githubUrl: '',
    platforms: ['Web'],
  },
  {
    title: 'SCMS – Clinical Management System',
    tagline: 'Behavioural health EHR for a US provider',
    role: 'Founder & solo developer · PrimeCurve Solutionz',
    client: 'SYNERGY Recovery Institute, Washington DC (repeat client)',
    period: 'Aug 2026 – present · ~5-month build',
    summary:
      'After I delivered dr-nath.com, the same client hired me to build an EHR for their behavioural health company. I am the sole developer on this custom EHR, practice management and revenue-cycle platform, built under a signed development agreement in contract phases. Phases 1–3 are live in production with real patient records; billing and telehealth are next.',
    highlights: [
      'Built to HIPAA requirements: MFA, account lockout, server-enforced idle timeout, encryption in transit and at rest, and 13 roles with 49 permissions checked on every request',
      'Immutable, hash-chained audit trail that even a database superuser cannot edit or delete',
      'One patient, one chart: permanent MRN, duplicate detection and multi-program enrolment through an admin-managed program registry (no code release needed for a new program)',
      'Scheduling with day, week and month views, a 9-status appointment lifecycle, conflict warnings and a guided 4-step front-desk check-in',
      'Insurance with primary, secondary and tertiary coverage, coordination of benefits and card images; documents verified by content and stored outside the web root',
      'Clinical documentation: diagnostic assessment (90791), treatment plans with ICD-10 diagnoses and review cycles, psychotherapy progress notes, and clinician and patient e-signatures',
      'Supervision engine: co-signature workflow that seals notes, configurable rules and a 72-hour deadline, plus billing-readiness checks',
      'Online registration and intake packets with patient invites and e-signing',
      'All 26 contract acceptance items verified end to end by an automated test, within a suite of 1,700+ backend tests',
    ],
    tech: ['Django 5', 'Django REST Framework', 'React 18', 'TypeScript', 'Mantine', 'TanStack Query', 'PostgreSQL 16', 'Redis', 'Nginx + Gunicorn', 'Playwright'],
    status: 'Live in production with live patient records · Phases 1–3 delivered · code private',
    image: '/images/projects/scms.webp',
    liveUrl: 'https://scms-sri.com',
    githubUrl: '',
    platforms: ['Web'],
  },
  {
    title: 'Dr. Nath – Coaching for Impact',
    tagline: 'All-in-one coaching platform + mobile app',
    role: 'Solo full-stack developer',
    client: 'Coaching business (Fiverr client)',
    period: '2026 · ~4 months',
    summary:
      'A coach needed one platform to run her whole practice: bookings and payments, live video sessions, programmes, client documents and communication, with a React Native app on the same API.',
    highlights: [
      'Three roles: admin, coach and client, with dashboards for each',
      'Booking flow: choose a session → pick a slot → pay with Stripe (refunds supported), with Google Calendar availability sync, invites and rescheduling',
      'Built-in 1:1 video sessions with LiveKit, plus AI session notes: live transcription (Deepgram) summarised by AI',
      'AI assistant chatbot (Claude / OpenAI) that answers visitor questions about the coaching',
      'Coaching tools: programmes and group sessions, milestones, habit tracking, session reflections and reviews',
      'E-signatures with generated PDFs, a form builder for intake forms and a shared resource library',
      'Real-time messaging (Django Channels / WebSockets), push notifications, newsletters and announcements',
      'React Native app for clients and coaches sharing the same Django REST API',
    ],
    tech: ['Django', 'Django REST Framework', 'React', 'React Native', 'PostgreSQL', 'Django Channels', 'Redis', 'LiveKit', 'Stripe', 'Google Calendar API', 'Claude / OpenAI', 'Deepgram'],
    status: 'Live at dr-nath.com',
    image: '/images/projects/dr-nath.webp',
    liveUrl: 'https://dr-nath.com',
    githubUrl: '',
    platforms: ['Web', 'Mobile'],
  },
  {
    title: 'Kannari Music Academy',
    tagline: 'Music learning platform + mobile app',
    role: 'Solo full-stack developer',
    client: 'US music academy (via Softsolutionz)',
    period: '2025 · ~5 months',
    summary:
      'A US music academy moved its teaching online: a subscription platform for video and audio lessons, assignments and parent-supervised learning for minors, with a React Native app on the same API.',
    highlights: [
      'Five roles: admin, teachers (content), parents (approvals), schools (classes) and students (lessons, assignments, games)',
      'Parent-consent workflow: minor accounts stay restricted until a parent approves; adults get direct access',
      'Video and audio lessons, assignments, progress tracking and learning games',
      'Real-time chat and messaging, video calls and email notifications',
      'Stripe subscriptions for paid access',
      'React Native app for students, parents and teachers, sharing the same Django REST API as the web app',
    ],
    tech: ['Django', 'Django REST Framework', 'React', 'React Native', 'PostgreSQL', 'Celery', 'Redis', 'Stripe'],
    status: 'Live · students actively using it · code private (client-owned)',
    image: '/images/projects/kannari-music-academy.webp',
    liveUrl: 'https://kannarimusicacademy.com',
    githubUrl: '',
    platforms: ['Web', 'Mobile'],
  },
  {
    title: 'Popupplay',
    tagline: 'Location-based social & dating platform',
    role: 'Solo full-stack developer',
    client: 'Client via Softsolutionz',
    period: '2026 · ~4 months + ongoing',
    summary:
      'A dating platform where users "pop up" on a live map to show nearby people they are available right now, then connect through chat, video calls and reels.',
    highlights: [
      'Live map pop-ups: users broadcast that they are live and others discover them by location (Leaflet)',
      'Real-time messaging over WebSockets and peer-to-peer video calls with WebRTC (STUN/TURN)',
      'Reels: short-form video uploads and feed',
      'CCBill payment integration; tipping system in progress',
      'Ongoing feature work for the client after launch',
    ],
    tech: ['Node.js', 'Express', 'React', 'WebSockets', 'WebRTC', 'Leaflet', 'CCBill', 'Nginx'],
    status: 'Live · active users · code private (client-owned)',
    image: '/images/projects/popupplay.webp',
    liveUrl: 'https://popupplay.fun',
    githubUrl: '',
    platforms: ['Web'],
  },
  {
    title: 'Gold Shop Ledger System',
    tagline: 'Trading, ledger & inventory software for a gold shop',
    role: 'Solo full-stack developer',
    client: 'Gold & silver trading shop, Pakistan (via Softsolutionz)',
    period: '2026 · ~3 months',
    summary:
      'A gold and silver trading shop ran its business on paper registers and Excel. I replaced them with one multi-user system for customer ledgers, daily metal trading, cash and bank books, and reports.',
    highlights: [
      'Buy and sell gold, silver and copper with per-gram or per-tola rates, plus metal settlements by impure weight, point and karat',
      'Customer ledgers with receivable/payable (laine/daine) cash balances and separate gold, silver and copper balances; ledger-to-ledger transfers',
      'Cash book and bank ledger with bank transfers and cheques; file attachments on entries',
      'Daily trade, monthly and customer summary reports, exported as PDF and Excel and shared to customers on WhatsApp',
      'Multi-user access with admin user management, live "who is online" presence and activity logs',
      'Trash with restore, plus automatic hourly database backups with retention and one-click restore',
      'Dockerised deployment (app + PostgreSQL); an earlier version shipped as an offline Windows desktop app',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'jsPDF', 'SheetJS', 'Docker'],
    status: 'In daily use by the shop · private system · screenshot blurred to protect customer data',
    image: '/images/projects/gold-ledger.webp',
    liveUrl: '',
    githubUrl: '',
    platforms: ['Web'],
  },
  {
    title: 'AI Embroidery Files',
    tagline: 'AI design generation + embroidery digitizing orders',
    role: 'Solo full-stack developer',
    client: 'Embroidery digitizer (via Softsolutionz)',
    period: '2025 · ~1.5 months',
    summary:
      'An embroidery digitizer wanted customers to create designs with AI and order machine-ready embroidery files online, turning a manual service into a self-serve storefront.',
    highlights: [
      'AI design generation: customers describe a design and the OpenAI image API creates it',
      'Order flow: generate → order → pay with Stripe → admin reviews and digitizes → customer downloads',
      'Delivery in all major machine formats (DST, PES, JEF, EXP and more)',
      'Customer and admin roles with order management dashboard',
    ],
    tech: ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Celery', 'Redis', 'OpenAI API', 'Stripe'],
    status: 'Live · customers placing paid orders',
    image: '/images/projects/embroidery-digitizing.webp',
    liveUrl: 'https://aiembroideryfiles.com',
    githubUrl: '',
    platforms: ['Web'],
  },
  {
    title: 'Makanzar Real Estate',
    tagline: 'Property listing platform for dealers',
    role: 'Solo full-stack developer',
    client: 'Real estate agency, Pakistan (referral)',
    period: '2025 · ~1 month',
    summary:
      'A listing platform where property dealers publish projects and houses for sale or rent, and buyers search, filter and contact dealers directly.',
    highlights: [
      'Dealer accounts to publish projects, houses and plots for sale or rent',
      'Map and location-based search with filters for price, type and area',
      'Image galleries and full property detail pages',
      'Contact-the-dealer flow and saved favourites',
      'Admin approval of listings and featured listings',
    ],
    tech: ['Django', 'Django REST Framework', 'React', 'PostgreSQL'],
    status: 'Live',
    image: '/images/projects/makanzar-real-estate.webp',
    liveUrl: 'https://makanzar-real-estate.vercel.app/',
    githubUrl: '',
    platforms: ['Web'],
  },
];

export const services = [
  {
    icon: Layers,
    title: 'Django + React Web Development',
    description: 'End-to-end web application development with scalable backend architecture and modern, responsive frontend experiences.',
    features: ['React/Next.js Frontend', 'Django Backend', 'PostgreSQL Database', 'REST API Integration'],
  },
  {
    icon: Smartphone,
    title: 'Web App Enhancement',
    description: 'Performance optimization, bug fixing, and feature expansion for production web applications.',
    features: ['Performance Tuning', 'Bug Fixing', 'Feature Development', 'Code Refactoring'],
  },
  {
    icon: Database,
    title: 'Backend & Database Solutions',
    description: 'Secure backend architecture with Supabase and Firebase, including auth systems, realtime updates, and cloud workflows.',
    features: ['Supabase / Firebase', 'Real-time Databases', 'Authentication', 'Cloud Functions'],
  },
  {
    icon: Globe,
    title: 'API Development & Integration',
    description: 'Custom API development and third-party integrations including payment gateways, social auth, and cloud services.',
    features: ['RESTful APIs', 'Third-party Integration', 'Payment Gateways', 'OAuth / Social Auth'],
  },
];

export const stats = [
  { label: 'Production Apps', value: '8' },
  { label: 'Clients', value: '10+' },
  { label: 'Years Experience', value: '3+' },
  { label: 'Countries Served', value: '3' },
];

export const testimonials = [
  {
    name: 'Client - Startup Founder',
    role: 'Web Application Project',
    text: 'Danish quickly understood our requirements and delivered a clean Django + React solution. Communication was smooth and every milestone was delivered on time.',
    rating: 5,
    platform: 'Fiverr',
  },
  {
    name: 'Client - Product Owner',
    role: 'Firebase Web Platform',
    text: 'Excellent developer to work with. Danish improved app performance and fixed critical issues in our Firebase workflow with professional code quality.',
    rating: 5,
    platform: 'Fiverr',
  },
  {
    name: 'Client - Business Owner',
    role: 'Supabase Dashboard',
    text: 'Danish built our Supabase-based admin panel with realtime features exactly as requested. He was responsive, detail-oriented, and easy to collaborate with.',
    rating: 5,
    platform: 'Fiverr',
  },
  {
    name: 'Client - Tech Lead',
    role: 'Django API Optimization',
    text: 'Very strong backend skills. Danish refactored our Django APIs, reduced response times, and delivered maintainable code with clear handover notes.',
    rating: 5,
    platform: 'Fiverr',
  },
];

export const experience = [
  {
    year: 'Aug 2026 - Present',
    title: 'Founder & Lead Developer',
    company: 'PrimeCurve Solutionz',
    type: 'Own studio · Remote',
    points: [
      'Sole developer of SCMS, a behavioural health EHR for SYNERGY Recovery Institute (Washington DC), won as a repeat contract after delivering the client\'s coaching platform',
      'Delivered Phases 1–3 to production with live patient records: patient records and MRN, scheduling, check-in, insurance, clinical documentation and supervision co-signature',
      'Built to HIPAA requirements (MFA, 13 roles and 49 permissions, immutable audit trail), backed by 1,700+ automated tests',
      'Own the full cycle: contract scoping, architecture, development, deployment and client communication',
    ],
    highlights: ['Django', 'React + TypeScript', 'PostgreSQL', 'Redis', 'HIPAA'],
  },
  {
    year: 'Sep 2025 - Present',
    title: 'Software Engineer',
    company: 'Cognisol Technologies',
    type: 'Full-time · Remote',
    points: [
      'Sole full-stack developer of CogniPulse, a multi-clinic healthcare appointment SaaS, working directly with the project manager and CTO',
      'Built phone booking with Vonage (IVR booking, SMS reminders, OTP) and time-zone-safe scheduling for clinics, doctors and patients',
      'Background jobs with Celery and Redis; deploy and maintain the platform on a Linux VPS. Live with two clinics onboarded',
    ],
    highlights: ['Django', 'React', 'Celery + Redis', 'PostgreSQL', 'Vonage'],
  },
  {
    year: '2025 - Present',
    title: 'Full Stack Developer',
    company: 'Softsolutionz',
    type: 'Contract · Remote',
    points: [
      'Solo developer on client products for US and local clients, from requirements to deployment',
      'Kannari Music Academy: subscription e-learning platform plus a React Native app, Stripe billing and parent consent for minors',
      'Popupplay (WebRTC video calls, WebSockets, CCBill), AI Embroidery Files (OpenAI + Stripe) and a gold shop ledger that replaced paper and Excel',
    ],
    highlights: ['Django', 'Node.js', 'React Native', 'Stripe', 'WebRTC'],
  },
  {
    year: '2024 - 2026',
    title: 'Freelance Full Stack Developer',
    company: 'Fiverr & direct clients',
    type: 'Freelance · Remote',
    points: [
      'Dr. Nath – Coaching for Impact: coaching platform and React Native app with Stripe booking, LiveKit video, AI session notes and e-signatures; led to the SCMS contract',
      'Makanzar Real Estate: property listing platform for a Pakistani agency',
      'Freelance work now continues under PrimeCurve Solutionz',
    ],
    highlights: ['Django', 'React', 'React Native', 'LiveKit', 'Stripe'],
  },
  {
    year: '2021 - 2023',
    title: 'Learning & First Projects',
    company: 'Self-taught',
    type: 'Alongside my CS degree',
    points: [
      'Learned web development hands-on with practice projects across frontend and backend, moving from JavaScript and React to Python and Django',
    ],
    highlights: ['JavaScript', 'React', 'Python', 'Django', 'Git'],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your project requirements, goals, timeline, and budget. I analyze the scope and provide a clear proposal with milestones.',
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'I design the technical architecture, select the right tech stack, plan the database schema, and create a development roadmap.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'I build your application iteratively with regular progress updates. Clean code, best practices, and thorough testing at every stage.',
  },
  {
    step: '04',
    title: 'Review & Testing',
    description: 'Comprehensive testing across devices and browsers. You review each milestone and provide feedback for refinements.',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'I deploy your application to production with proper CI/CD setup, monitoring, and documentation for future maintenance.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Post-launch support to handle any issues, performance tuning, and feature iterations based on real user feedback.',
  },
];

export const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in Django + React for full stack web apps, along with Supabase and Firebase for backend services. I also work with TypeScript, PostgreSQL, and Tailwind CSS.',
  },
  {
    question: 'How can I hire you?',
    answer: 'Message me on WhatsApp, email me, connect on LinkedIn or use the contact form below. Share your project details and I will suggest the best scope, timeline, and pricing.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timeline depends on complexity. Small fixes can be done quickly, while full web applications typically require multiple milestones. I always provide a clear estimate after reviewing your requirements.',
  },
  {
    question: 'Do you build scalable web applications?',
    answer: 'Yes. I build responsive web applications with React/Next.js and robust backend systems that support modern product workflows.',
  },
  {
    question: 'Do you provide post-delivery support?',
    answer: 'Absolutely. I offer post-launch support to fix bugs, handle deployment issues, and make minor adjustments. For ongoing maintenance, we can discuss a separate arrangement.',
  },
  {
    question: 'Can you work with existing codebases?',
    answer: 'Yes. I regularly work with existing projects — fixing bugs, adding features, optimizing performance, or migrating to newer technologies. I can work with any JavaScript/TypeScript codebase.',
  },
];

export const packages = [
  {
    name: 'Starter',
    price: '$150',
    description: 'Perfect for landing pages, personal sites, and small business websites.',
    features: [
      'Single page web application',
      'Responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '3-day delivery',
      '1 revision round',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$500',
    description: 'Ideal for full-featured web apps, dashboards, and e-commerce sites.',
    features: [
      'Multi-page web application',
      'User authentication',
      'Database integration',
      'Admin dashboard',
      'API development',
      'Payment integration',
      '14-day delivery',
      '3 revision rounds',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$1200+',
    description: 'For complex platforms and full-stack web ecosystems.',
    features: [
      'Full-stack web platform',
      'Real-time features',
      'Cloud infrastructure setup',
      'CI/CD pipeline',
      'Performance optimization',
      'Comprehensive testing',
      'Custom timeline',
      'Unlimited revisions',
    ],
    highlighted: false,
  },
];

export const education = [
  {
    period: '2021 - 2025',
    degree: 'BS Computer Science',
    institution: 'University of the Punjab, Gujranwala Campus',
    description: 'Final year project: a Fiverr-style marketplace for home and commercial services (plumbing, electrical and more), connecting customers with local service providers.',
  },
];

export const certifications = [
  { name: 'Django Web Development', issuer: 'Online Learning', year: '2024' },
  { name: 'React & TypeScript Fundamentals', issuer: 'Online Learning', year: '2023' },
  { name: 'Firebase for Web & Mobile', issuer: 'Online Learning', year: '2023' },
  { name: 'Supabase Backend Essentials', issuer: 'Online Learning', year: '2024' },
];

export const terminalLines = [
  { prefix: '~$', text: 'whoami', delay: 0 },
  { prefix: '', text: 'Danish Rehman - Full Stack Developer', delay: 700 },
  { prefix: '~$', text: 'cat stack.json', delay: 1400 },
  { prefix: '', text: '["Django", "React", "React Native", "Node.js", "PostgreSQL"]', delay: 2100 },
  { prefix: '~$', text: 'cat projects.log', delay: 2800 },
  { prefix: '', text: 'EHR · coaching platform · e-learning + mobile · gold shop ledger', delay: 3500 },
  { prefix: '~$', text: 'cat status.txt', delay: 4200 },
  { prefix: '', text: 'Open to freelance projects & full-time remote roles', delay: 4900 },
];
