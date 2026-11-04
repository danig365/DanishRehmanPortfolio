import { motion } from 'framer-motion';
import { Check, MessageCircle, FileDown, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { engagements, personalInfo } from '../data/portfolio';

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// working together"
          title="Ways to Work With Me"
          description="Clear scope, milestone payments and no surprises, or a full-time hire"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {engagements.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`relative h-full flex flex-col p-6 lg:p-8 rounded-2xl transition-all duration-300 glass-shine ${
                  item.highlighted
                    ? 'glass-panel border-sky-600/20 dark:border-sky-400/20 shadow-[0_0_30px_rgba(56,189,248,0.06)]'
                    : 'glass-card glass-card-hover'
                }`}
              >
                <p className="text-xs font-mono text-sky-600 dark:text-sky-400 mb-2">{item.audience}</p>
                <h3 className="text-slate-900 dark:text-white font-semibold text-xl mb-2">{item.name}</h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {item.message ? (
                  <a
                    href={`${personalInfo.whatsapp}?text=${encodeURIComponent(item.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                      item.highlighted
                        ? 'bg-green-600 hover:bg-green-700 text-white hover:shadow-lg'
                        : 'glass-btn text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {item.cta}
                  </a>
                ) : (
                  <div className="flex gap-2">
                    <a
                      href={personalInfo.cv}
                      download
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm glass-btn text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white transition-all"
                    >
                      <FileDown className="w-4 h-4" />
                      {item.cta}
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('Full-time role')}`}
                      aria-label="Email me about a full-time role"
                      className="w-12 flex items-center justify-center rounded-xl glass-btn text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white transition-all"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
