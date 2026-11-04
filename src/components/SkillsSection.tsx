import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { skillGroups, alsoWorkedWith, projects } from '../data/portfolio';

// How many projects list one of the skill's tech names
function projectCount(match: string[]) {
  return projects.filter((project) => project.tech.some((t) => match.includes(t))).length;
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/skills-bg.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.15] dark:opacity-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/70 via-transparent to-[#f0f4f8]/70 dark:from-[#080c12]/80 dark:via-transparent dark:to-[#080c12]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// tech stack"
          title="Skills & Expertise"
          description="The tools I ship production apps with, and how many of my projects use each"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {skillGroups.map((group, index) => (
            <AnimatedSection key={group.title} delay={index * 0.08}>
              <div className="h-full p-6 rounded-2xl glass-card glass-shine">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center">
                    <group.icon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-semibold">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const count = projectCount(skill.match);
                    return (
                      <li
                        key={skill.name}
                        className="inline-flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-lg glass-subtle text-sm text-slate-700 dark:text-gray-200"
                      >
                        {skill.name}
                        {count > 0 && (
                          <span
                            className="px-1.5 py-0.5 rounded-md bg-sky-500/10 dark:bg-sky-400/10 text-[11px] font-mono text-sky-700 dark:text-sky-300"
                            title={`Used in ${count} of my projects`}
                          >
                            {count} {count === 1 ? 'project' : 'projects'}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-center text-sm text-slate-500 dark:text-gray-400 mt-10">
            <span className="font-mono text-slate-400 dark:text-gray-500">Also worked with: </span>
            {alsoWorkedWith.join(' · ')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
