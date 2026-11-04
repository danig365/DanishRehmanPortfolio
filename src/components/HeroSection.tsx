import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowDown, MessageCircle, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import GlitchText from './GlitchText';
import { personalInfo, roles, terminalLines, projects } from '../data/portfolio';

const startProjectUrl = `${personalInfo.whatsapp}?text=${encodeURIComponent(
  "Hi Danish, I saw your portfolio and I'd like to discuss a project."
)}`;

const proofPoints = [
  `${projects.length} production apps`,
  'Clients in the US, France & Pakistan',
  'Repeat client',
  'Founder, PrimeCurve Solutionz',
];

function TerminalWindow() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, index) =>
      setTimeout(() => setVisibleCount((count) => Math.max(count, index + 1)), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/[0.1] bg-white/80 dark:bg-[#0d131c]/80 backdrop-blur-md"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="w-3 h-3 rounded-full bg-red-400/70 dark:bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/70 dark:bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-400/70 dark:bg-green-500" />
        <span className="ml-2 text-xs font-mono text-slate-500 dark:text-gray-500">danish@dev ~ zsh</span>
      </div>
      <div className="p-4 font-mono text-sm space-y-1 min-h-[220px]" aria-hidden="true">
        {terminalLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: index < visibleCount ? 1 : 0, x: index < visibleCount ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className={`flex gap-2 ${line.prefix ? 'text-slate-700 dark:text-gray-300' : 'text-sky-700 dark:text-sky-300'}`}
          >
            {line.prefix && <span className="text-slate-400 dark:text-gray-500 shrink-0">{line.prefix}</span>}
            <span>{line.text}</span>
          </motion.div>
        ))}
        <div className="flex gap-2 items-center text-slate-700 dark:text-gray-300">
          <span className="text-slate-400 dark:text-gray-500">~$</span>
          <span className="cursor-blink" />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const typedRole = useTypewriter(roles, 80, 40, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mobile-safe">
      {/* Background: faint grid fading out from the centre, with soft glows */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] bg-sky-400/[0.12] dark:bg-sky-500/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] bg-teal-400/[0.12] dark:bg-teal-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#f0f4f8] dark:to-[#080c12]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mobile-safe container-safe">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 glass-badge"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-600 dark:text-gray-300 text-sm font-mono">
                Open to freelance projects &amp; full-time remote roles
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2">
                <span className="text-slate-500 dark:text-gray-500 text-lg sm:text-xl font-mono font-normal block mb-2">Hello, I'm</span>
                <GlitchText text={personalInfo.name} as="span" className="text-slate-900 dark:text-white block" />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-h-[2.5rem] mt-4 mb-6"
            >
              <span className="text-xl sm:text-2xl font-mono text-slate-500 dark:text-gray-500">
                {'> '}<span className="text-sky-600 dark:text-sky-300">{typedRole}</span>
                <span className="text-slate-400 dark:text-gray-500 animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl mb-8"
            >
              I build production web and mobile apps (
              <span className="text-slate-800 dark:text-gray-200">EHRs, booking platforms, e-learning and business systems</span>) with{' '}
              <span className="text-slate-800 dark:text-gray-200">Django, React and React Native</span>. Solo, end to end, for
              clients in the US, France and Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href={startProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Start a Project
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-all hover:shadow-lg"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.cv}
                download
                className="flex items-center gap-2 px-6 py-3 glass-btn rounded-xl text-slate-700 dark:text-white font-semibold transition-all duration-300"
              >
                <FileDown className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mt-8 text-sm text-slate-500 dark:text-gray-400"
            >
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                  {point}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 mt-6"
            >
              {[
                { icon: Github, label: 'GitHub', href: personalInfo.github },
                { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
                { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center">
            <TerminalWindow />
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-gray-600 hover:text-slate-700 dark:hover:text-white transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
