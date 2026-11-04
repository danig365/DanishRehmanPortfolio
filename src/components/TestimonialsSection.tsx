import { Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/portfolio';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// client feedback"
          title="What Clients Say"
          description="From the people I've built for, including a client who came back for a second, bigger project"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.1}>
              <figure className="relative h-full flex flex-col p-6 lg:p-7 rounded-2xl glass-panel glass-shine">
                <Quote className="w-8 h-8 text-sky-600/30 dark:text-sky-400/30 mb-4" aria-hidden="true" />
                <blockquote className="flex-1 text-slate-700 dark:text-gray-300 leading-relaxed mb-6">
                  "{item.text}"
                </blockquote>
                <figcaption className="pt-5 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <p className="text-slate-900 dark:text-white font-semibold">{item.name}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm">{item.role}</p>
                  <p className="mt-2 inline-block px-2.5 py-1 text-xs font-mono rounded-lg glass-subtle text-sky-700 dark:text-sky-300">
                    {item.project}
                  </p>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
