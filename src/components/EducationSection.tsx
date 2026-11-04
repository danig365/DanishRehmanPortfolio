import { GraduationCap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { education } from '../data/portfolio';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="// background" title="Education" />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item) => (
            <AnimatedSection key={item.degree}>
              <div className="flex flex-col sm:flex-row gap-5 p-6 lg:p-8 rounded-2xl glass-panel glass-shine">
                <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-gray-400 glass-badge rounded-full px-3 py-1">
                    {item.period}
                  </span>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-lg mt-3 mb-1">{item.degree}</h3>
                  <p className="text-sky-600 dark:text-sky-400 text-sm mb-3">{item.institution}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
