const experiences = [
  {
    title: 'Software Engineer',
    company: 'MathWorks',
    period: 'Jun 2022 – Present',
    bullets: [
      'Developed and shipped features for the MATLAB Live Editor and Code Editor using JavaScript and TypeScript, improving editor rendering speed and UI responsiveness.',
      'Implemented a feature within the docking/undocking system — handling complex UI state management across panel states, layout changes, and dynamic resize behavior, reducing memory usage by ~90%.',
      'Designed and built the frontend of standalone widgets (including a live code comparison widget) embedded across multiple MATLAB products — owning UI architecture, component design, and backend service integration.',
      'Built and maintained backend tooling to support cross-platform integration for MATLAB Mobile, enabling CI/CD pipeline automation that cut integration time by ~1 month and shifted bug detection earlier.',
      'Collaborated with engineers and UX designers to design and implement Presentation Mode for the MATLAB Editor — a slideshow-style presentation feature within the editor.',
    ],
    tags: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
  },
  {
    title: 'Engineer — Engineering Development Group',
    company: 'MathWorks',
    period: 'Feb 2022 – Jun 2022',
    bullets: [
      'Resolved 50+ support cases spanning MATLAB Editor, installation, licensing, and MATLAB Online through systematic root-cause analysis and rapid domain knowledge acquisition.',
      'Identified issue impact and scope, providing technical guidance to engineering teams to reduce recurring issues.',
    ],
    tags: ['MATLAB', 'Debugging', 'Root Cause Analysis'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-8 md:px-16 lg:px-24 py-28">
      <div className="max-w-4xl">
        <p className="text-[11px] tracking-[0.3em] text-amber-700 uppercase mb-3 font-sans">
          Background
        </p>
        <h2 className="font-serif font-light text-stone-900 text-section mb-16">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="group relative bg-white rounded-2xl p-8 border border-stone-100 hover:-translate-y-0.5 transition-transform duration-300 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5 gap-2">
                <div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-1 font-normal">{exp.title}</h3>
                  <p className="text-amber-700 text-xs font-medium tracking-wide uppercase font-sans">
                    {exp.company}
                  </p>
                </div>
                <span className="text-[11px] text-stone-400 tracking-wide font-sans whitespace-nowrap mt-1">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-stone-500 text-sm leading-relaxed font-sans">
                    <span className="text-amber-400 mt-1.5 flex-shrink-0">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.15em] uppercase bg-stone-50 text-stone-500 px-3 py-1.5 rounded-full border border-stone-100 font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
