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
      { name: 'JavaScript', Icon: SiJavascript, color: '#B45309' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#1D4ED8' },
      { name: 'Python', Icon: SiPython, color: '#15803D' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', Icon: SiReact, color: '#0284C7' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#1C1917' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#15803D' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#C2410C' },
      { name: 'Docker', Icon: SiDocker, color: '#0369A1' },
      { name: 'VS Code', Icon: VscCode, color: '#1D4ED8' },
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
          className="font-serif font-light text-stone-900 mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
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
                {group.skills.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 bg-stone-50 hover:bg-stone-100 border border-stone-100 hover:border-stone-200 px-5 py-3 rounded-xl transition-all duration-200 cursor-default"
                  >
                    <Icon className="text-lg flex-shrink-0" style={{ color }} />
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
