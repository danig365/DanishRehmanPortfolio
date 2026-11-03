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

export const projects = [
  {
    title: 'CognisolHealth - Health Appointment System',
    description: 'Multi-clinic, multi-doctor appointment platform with patient management, manual booking workflows, and Vonage-based booking support.',
    tech: ['Django', 'React'],
    image: '/images/projects/cognisolhealth.webp',
    category: 'web',
    liveUrl: 'https://hp.cognisol.ai',
    githubUrl: '',
  },
  {
    title: 'Kannari Music Academy',
    description: 'Comprehensive music learning platform with structured course delivery, subscription management, parent consent workflows for minors, and integrated communication features.',
    tech: ['Django', 'React'],
    image: '/images/projects/kannari-music-academy.webp',
    category: 'web',
    liveUrl: 'https://kannarimusicacademy.com',
    githubUrl: '',
  },
  {
    title: 'Embroidery Digitizing System',
    description: 'AI-powered platform where users generate design concepts and place orders to receive machine-ready embroidery files in multiple production formats.',
    tech: ['Django', 'React'],
    image: '/images/projects/embroidery-digitizing.webp',
    category: 'web',
    liveUrl: 'https://aiembroideryfiles.com',
    githubUrl: '',
  },
  {
    title: 'Popupplay',
    description: 'Online dating platform with location-based discovery, real-time chat, video calling, and short-form media sharing including videos and reels.',
    tech: ['Node.js', 'Express'],
    image: '/images/projects/popupplay.webp',
    category: 'web',
    liveUrl: 'https://popupplay.fun',
    githubUrl: '',
  },
  {
    title: 'Makanzar Real Estate',
    description: 'Real estate platform where traders can publish property locations and listing details, while users browse listings and view complete property information.',
    tech: ['Django', 'React'],
    image: '/images/projects/makanzar-real-estate.webp',
    category: 'web',
    liveUrl: 'https://makanzar-real-estate.vercel.app/',
    githubUrl: '',
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
    year: '2025 - Present',
    title: 'Full Stack Web Developer',
    company: 'Independent Freelance',
    description: 'Delivering web applications and feature development for clients with Django, React, Supabase, and Firebase.',
    highlights: ['Client-Centric Delivery', 'Clean Architecture', 'Fast Communication'],
  },
  {
    year: '2023 - 2025',
    title: 'Django + React Developer',
    company: 'Freelance',
    description: 'Built production-ready web systems with API integrations, authentication, dashboards, and deployment workflows.',
    highlights: ['Django', 'React', 'PostgreSQL'],
  },
  {
    year: '2022 - 2023',
    title: 'Frontend Developer',
    company: 'Remote',
    description: 'Developed responsive interfaces and integrated backend APIs for internal and client-facing products.',
    highlights: ['React', 'TypeScript', 'REST APIs'],
  },
  {
    year: '2021 - 2022',
    title: 'Junior Developer',
    company: 'Early Career / Self-Learning',
    description: 'Built foundational projects and practiced modern web development workflows across frontend and backend stacks.',
    highlights: ['JavaScript', 'Python', 'Git'],
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
    period: 'Ongoing',
    degree: 'Continuous Learning in Full Stack Development',
    institution: 'Self-Learning & Online Programs',
    description: 'Focused on practical software engineering, backend architecture, and modern frontend development.',
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
