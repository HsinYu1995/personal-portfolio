const projects = [
  {
    title: 'Siitch App',
    subtitle: 'iOS Carbon Footprint Tracking App',
    period: 'Sep 2020 – Jan 2021',
    bullets: [
      'Built a full-featured iOS app using React Native and Firebase to help users track daily carbon footprint — covering activity logging, real-time data sync, and emission statistics charts across 20+ screens.',
    ],
    tags: ['React Native', 'Firebase', 'iOS', 'JavaScript'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-8 md:px-16 lg:px-24 py-28 bg-stone-50">
      <div className="max-w-4xl">
        <p className="text-[11px] tracking-[0.3em] text-amber-700 uppercase mb-3 font-sans">
          Work
        </p>
        <h2 className="font-serif font-light text-stone-900 text-section mb-16">
          Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-2xl p-8 border border-stone-100 hover:-translate-y-0.5 transition-transform duration-300 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5 gap-2">
                <div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-1 font-normal">{project.title}</h3>
                  <p className="text-amber-700 text-xs font-medium tracking-wide uppercase font-sans">
                    {project.subtitle}
                  </p>
                </div>
                <span className="text-[11px] text-stone-400 tracking-wide font-sans whitespace-nowrap mt-1">
                  {project.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-stone-500 text-sm leading-relaxed font-sans">
                    <span className="text-amber-400 mt-1.5 flex-shrink-0">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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

export default Projects;
