import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Github, X, CheckCircle2, Smartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { projects, personalInfo, type Project } from '../data/portfolio';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#f0f4f8] dark:bg-[#0d131c] border border-black/[0.06] dark:border-white/[0.08] shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl glass-badge flex items-center justify-center text-slate-700 dark:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f0f4f8] dark:from-[#0d131c] to-transparent" />
        </div>

        <div className="px-6 sm:px-8 pb-8 -mt-10 relative">
          <p className="text-sky-600 dark:text-sky-400 font-mono text-xs mb-2">{project.tagline}</p>
          <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-gray-400 mb-6">
            <span>{project.role}</span>
            <span>{project.client}</span>
            <span>{project.period}</span>
          </div>

          <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">{project.summary}</p>

          <h4 className="text-slate-900 dark:text-white font-semibold mb-3">What I built</h4>
          <ul className="space-y-2.5 mb-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-slate-900 dark:text-white font-semibold mb-3">Stack</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-lg glass-subtle text-slate-600 dark:text-gray-300">
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm text-slate-500 dark:text-gray-400 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2" />
            {project.status}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/90 text-white dark:text-[#080c12] font-semibold text-sm hover:bg-slate-800 dark:hover:bg-white transition-colors"
              >
                Visit live site
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-btn text-slate-700 dark:text-white font-semibold text-sm"
              >
                <Github className="w-4 h-4" />
                View code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// portfolio"
          title="Featured Projects"
          description="Production apps I built end to end, live and used by real clients and users"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-2xl overflow-hidden glass-card glass-card-hover glass-shine transition-all duration-500"
            >
              <button
                onClick={() => setSelected(project)}
                aria-label={`Open ${project.title} case study`}
                className="relative h-48 overflow-hidden text-left"
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f0f4f8] via-[#f0f4f8]/30 to-transparent dark:from-[#080c12] dark:via-[#080c12]/30" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-full bg-slate-900/75 text-white backdrop-blur-sm"
                    >
                      {p === 'Mobile' && <Smartphone className="w-3 h-3" />}
                      {p}
                    </span>
                  ))}
                </div>
              </button>

              <div className="flex flex-col flex-1 p-5">
                <p className="text-sky-600 dark:text-sky-400 font-mono text-xs mb-1.5">{project.tagline}</p>
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-xs text-slate-400 dark:text-gray-500 mb-3">
                  {project.role} · {project.period}
                </p>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md glass-subtle text-slate-500 dark:text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono text-slate-400 dark:text-gray-500">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-center gap-4 text-sm">
                  <button
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 font-medium text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                  >
                    Case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                      className="inline-flex items-center gap-1.5 text-slate-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                    >
                      Live
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="inline-flex items-center gap-1.5 text-slate-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                    >
                      Code
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-600 dark:text-gray-500 dark:hover:text-sky-300 font-mono text-sm transition-colors group"
            >
              More on GitHub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {createPortal(
        <AnimatePresence>
          {selected && <ProjectModal project={selected} onClose={closeModal} />}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
