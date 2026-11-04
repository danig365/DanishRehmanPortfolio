import { MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { services, personalInfo } from '../data/portfolio';
import BackgroundVideo from './BackgroundVideo';

const whatsappFor = (service: string) =>
  `${personalInfo.whatsapp}?text=${encodeURIComponent(
    `Hi Danish, I saw your portfolio and I'm interested in ${service}. Can we discuss my project?`
  )}`;

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundVideo
          src="/videos/services.mp4"
          poster="/videos/services-poster.webp"
          fallback="/images/services-bg.webp"
          className="w-full h-full object-cover object-top opacity-[0.15] dark:opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/70 via-transparent to-[#f0f4f8]/70 dark:from-[#080c12]/80 dark:via-transparent dark:to-[#080c12]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// what I offer"
          title="Services"
          description="What I can build for you, and the projects where I've already done it"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={(index % 3) * 0.1}>
              <div className="group h-full flex flex-col p-6 rounded-2xl glass-card glass-card-hover glass-shine transition-all duration-300">
                <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0" />
                      <span className="text-slate-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="text-xs font-mono text-slate-500 dark:text-gray-300 mb-2">Proven in</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.provenIn.map((project) => (
                      <a
                        key={project}
                        href="#projects"
                        className="px-2.5 py-1 text-xs rounded-lg glass-subtle text-slate-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                      >
                        {project}
                      </a>
                    ))}
                  </div>
                  <a
                    href={whatsappFor(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Discuss this on WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
