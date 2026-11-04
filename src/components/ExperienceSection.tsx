import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// career path"
          title="Experience"
          description="Where I've worked and what I shipped"
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((item, index) => (
            <AnimatedSection key={`${item.year}-${item.title}`} delay={index * 0.1} direction="right">
              <div className={`relative flex gap-6 lg:gap-10 ${index < experience.length - 1 ? "pb-12" : ""}`}>
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.2 }}
                    className={`relative z-10 w-4 h-4 rounded-full border-2 shrink-0 ${
                      index === 0
                        ? 'bg-sky-600 dark:bg-sky-400 border-sky-600 dark:border-sky-400 shadow-[0_0_12px_rgba(2,132,199,0.4)] dark:shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                        : 'bg-slate-100 border-slate-300 dark:bg-white/5 dark:border-white/20'
                    }`}
                  />
                  {index < experience.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-slate-300 dark:from-white/10 to-transparent mt-2" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <span className="inline-block px-3 py-1 text-xs font-mono text-slate-500 dark:text-gray-400 glass-badge rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm mb-3">
                    <span className="text-sky-600 dark:text-sky-400">{item.company}</span>
                    <span className="text-slate-400 dark:text-gray-500"> · {item.type}</span>
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-slate-500 dark:text-gray-400 glass-subtle rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
