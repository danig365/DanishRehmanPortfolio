import {
  Code2, Smartphone, Database, Cloud, Globe, Shield,
  Layers, Zap, GitBranch, Terminal, Server, Palette
} from 'lucide-react';

export const personalInfo = {
  name: 'Danish Rehman',
  title: 'Full Stack Web Developer',
  tagline: 'Building Scalable Web Applications',
  bio: `I'm a Full Stack Web Developer focused on building reliable, high-performance applications with Django, React, Supabase, and Firebase. I help startups and businesses turn ideas into production-ready products with clean code, modern UI, and scalable architecture. As an independent freelancer, I work with clients directly and through platforms like Fiverr for bug fixing, feature development, and end-to-end web application delivery.`,
  fiverr: 'https://www.fiverr.com/danishpro12345',
  github: 'https://github.com/danig365/',
  linkedin: 'https://www.linkedin.com/in/danish-rehman-34788624b/',
  email: 'gdanish365@gmail.com',
  phone: '+92 324 9567570',
  whatsapp: 'https://wa.me/923249567570',
  address: 'Gujranwala, Pakistan',
};

export const roles = [
  'Full Stack Web Developer',
  'Django + React Developer',
  'Supabase Expert',
  'Firebase Developer',
  'API Integration Specialist',
  'Independent Freelancer',
];

export const skills = [
  { name: 'React.js', level: 93, category: 'frontend', icon: Code2 },
  { name: 'Django', level: 91, category: 'backend', icon: Server },
  { name: 'Python', level: 90, category: 'backend', icon: Terminal },
  { name: 'Supabase', level: 90, category: 'database', icon: Shield },
  { name: 'Firebase', level: 89, category: 'backend', icon: Cloud },
  { name: 'JavaScript (ES6+)', level: 86, category: 'frontend', icon: Smartphone },
  { name: 'TypeScript', level: 88, category: 'frontend', icon: Terminal },
  { name: 'Next.js', level: 84, category: 'frontend', icon: Globe },
  { name: 'Tailwind CSS', level: 91, category: 'frontend', icon: Palette },
  { name: 'PostgreSQL', level: 86, category: 'database', icon: Database },
  { name: 'REST API Development', level: 90, category: 'backend', icon: Zap },
  { name: 'Git / CI/CD', level: 85, category: 'tools', icon: GitBranch },
];

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
  { label: 'Projects Completed', value: '25+' },
  { label: 'Happy Clients', value: '15+' },
  { label: 'Years Experience', value: '3+' },
  { label: 'Client Rating', value: '5 Star' },
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
    description: 'Run my own software studio. Sole developer of SCMS, a HIPAA-oriented behavioural health EHR for a Washington DC provider, won as a repeat contract after delivering the client\'s coaching platform. I handle requirements, architecture, development, deployment and client communication.',
    highlights: ['Django', 'React + TypeScript', 'PostgreSQL', 'HIPAA', 'Client delivery'],
  },
  {
    year: 'Sep 2025 - Present',
    title: 'Software Engineer',
    company: 'Cognisol Technologies · Remote',
    description: 'Sole full-stack developer of CogniPulse, a multi-clinic healthcare appointment platform with online and phone (Vonage IVR/SMS) booking, working directly with the project manager and CTO.',
    highlights: ['Django', 'React', 'Celery + Redis', 'PostgreSQL', 'Vonage'],
  },
  {
    year: '2025 - Present',
    title: 'Full Stack Developer (Contract)',
    company: 'Softsolutionz · Remote',
    description: 'Solo developer on client products for US and international clients: a music learning platform with a React Native app, an AI embroidery ordering platform and a location-based dating platform.',
    highlights: ['Django', 'Node.js', 'React Native', 'Stripe', 'WebRTC'],
  },
  {
    year: '2024 - Present',
    title: 'Freelance Full Stack Developer',
    company: 'Fiverr & direct clients',
    description: 'End-to-end products for direct and Fiverr clients, including an all-in-one coaching platform with a React Native app (Dr. Nath) and a real estate listing platform for a Pakistani agency.',
    highlights: ['Django', 'React', 'PostgreSQL', 'REST APIs'],
  },
  {
    year: '2021 - 2023',
    title: 'Learning & First Projects',
    company: 'Self-taught',
    description: 'Learned web development hands-on alongside my studies: built practice projects across frontend and backend, and moved from JavaScript and React to Python and Django.',
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
    answer: 'You can hire me directly through email/WhatsApp/LinkedIn or via my Fiverr profile. Share your project details and I will suggest the best scope, timeline, and pricing.',
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
  { prefix: '', text: 'Danish Rehman - Full Stack Web Developer', delay: 800 },
  { prefix: '~$', text: 'cat skills.json', delay: 1600 },
  { prefix: '', text: '["Django + React", "Supabase", "Firebase", "TypeScript"]', delay: 2400 },
  { prefix: '~$', text: 'cat status.txt', delay: 3200 },
  { prefix: '', text: 'Available for freelance and contract projects', delay: 4000 },
  { prefix: '~$', text: 'echo "Let\'s build something amazing!"', delay: 4800 },
  { prefix: '', text: "Let's build something amazing!", delay: 5600 },
];
