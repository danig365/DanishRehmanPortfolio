import { motion } from 'framer-motion';
import { MapPin, Briefcase, Building2, GraduationCap, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { personalInfo, stats } from '../data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// about me"
          title="Who I Am"
          description="Developer, founder, and the person who ships your product end to end"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative max-w-sm mx-auto">
              <div className="relative rounded-2xl overflow-hidden glass-panel glass-shine aspect-[4/5]">
                <img
                  src="/images/danish-rehman.webp"
                  alt="Danish Rehman, Full Stack Web Developer"
                  width={480}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f0f4f8] via-[#f0f4f8]/60 to-transparent dark:from-[#080c12] dark:via-[#080c12]/60" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-slate-900 dark:text-white font-semibold">{personalInfo.name}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>{personalInfo.address} · Remote worldwide</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -right-4 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl glass-panel glass-shine bg-white/95 dark:bg-[#0d131c]/95 flex flex-col items-center justify-center gap-1"
              >
                <span className="text-xs text-slate-500 dark:text-gray-400 text-center">Coding<br />since</span>
                <span className="text-3xl font-bold text-slate-900 dark:text-white">2021</span>
              </motion.div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="space-y-4 mb-6">
                {personalInfo.bio.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Briefcase, label: 'Currently', value: 'Software Engineer @ Cognisol' },
                  { icon: Building2, label: 'Founder', value: 'PrimeCurve Solutionz' },
                  { icon: GraduationCap, label: 'Education', value: 'BS Computer Science' },
                  { icon: Globe, label: 'Availability', value: 'Remote · UTC+5 (overlaps US & EU)' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl glass-card glass-card-hover glass-shine transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-sky-600 dark:text-sky-400 mb-2" />
                    <p className="text-xs text-slate-400 dark:text-gray-500 mb-0.5">{item.label}</p>
                    <p className="text-sm text-slate-900 dark:text-white font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl glass-subtle">
                    <motion.p
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="text-2xl font-bold text-slate-900 dark:text-white mb-1"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-xs text-slate-400 dark:text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
