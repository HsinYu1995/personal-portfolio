import type { CSSProperties } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiDocker,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', Icon: SiJavascript, colorStyle: { color: '#B45309' } as CSSProperties },
      { name: 'TypeScript', Icon: SiTypescript, colorStyle: { color: '#1D4ED8' } as CSSProperties },
      { name: 'Python', Icon: SiPython, colorStyle: { color: '#15803D' } as CSSProperties },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', Icon: SiReact, colorStyle: { color: '#0284C7' } as CSSProperties },
      { name: 'Next.js', Icon: SiNextdotjs, colorStyle: { color: '#1C1917' } as CSSProperties },
      { name: 'Node.js', Icon: SiNodedotjs, colorStyle: { color: '#15803D' } as CSSProperties },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', Icon: SiGit, colorStyle: { color: '#C2410C' } as CSSProperties },
      { name: 'Docker', Icon: SiDocker, colorStyle: { color: '#0369A1' } as CSSProperties },
      { name: 'VS Code', Icon: VscCode, colorStyle: { color: '#1D4ED8' } as CSSProperties },
    ],
  },
];

const TechSkills = () => {
  return (
    <section id="skills" className="px-8 md:px-16 lg:px-24 py-28 bg-white">
      <div className="max-w-4xl">
        <p className="text-[11px] tracking-[0.3em] text-amber-700 uppercase mb-3 font-sans">
          Toolkit
        </p>
        <h2
          className="font-serif font-light text-stone-900 text-section mb-16"
        >
          Tech Skills
        </h2>

        <div className="space-y-14">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-5 font-sans">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map(({ name, Icon, colorStyle }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 bg-stone-50 hover:bg-stone-100 border border-stone-100 hover:border-stone-200 px-5 py-3 rounded-xl transition-all duration-200 cursor-default"
                  >
                    <Icon className="text-lg flex-shrink-0" style={colorStyle} />
                    <span className="text-sm text-stone-700 font-medium font-sans">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
