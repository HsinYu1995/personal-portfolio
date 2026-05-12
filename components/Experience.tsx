const experiences = [
  {
    title: 'Software Engineer',
    company: 'MathWorks',
    period: 'Feb 2022 — Apr 2026',
    description:
      'Developed and maintained engineering software tools used by scientists and engineers worldwide. Contributed to core product features with a focus on reliability and performance.',
    tags: ['React', 'TypeScript', 'MATLAB'],
  },
  {
    title: 'React Native Developer',
    company: 'Stiich',
    period: 'Personal Project',
    description:
      'Designed and built a mobile application using React Native, focused on connecting users through shared interests and real-time events.',
    tags: ['React Native', 'JavaScript', 'Mobile'],
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
              key={exp.company}
              className="group relative bg-white rounded-2xl p-8 border border-stone-100 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
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

              <p className="text-stone-500 text-sm leading-relaxed mb-6 font-sans">{exp.description}</p>

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
