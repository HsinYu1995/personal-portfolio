const degrees = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of Southern California',
    gpa: '3.7 / 4.0',
    period: '2020 – 2021',
  },
  {
    degree: 'M.S. Materials Science',
    school: 'University of Illinois at Urbana-Champaign',
    gpa: '4.0 / 4.0',
    period: '2019',
  },
  {
    degree: 'B.E. Resources Engineering',
    school: 'National Cheng Kung University',
    gpa: '3.68 / 4.0',
    period: '2014 – 2018',
  },
];

const Education = () => {
  return (
    <section id="education" className="px-8 md:px-16 lg:px-24 py-28">
      <div className="max-w-4xl">
        <p className="text-[11px] tracking-[0.3em] text-amber-700 uppercase mb-3 font-sans">
          Academic
        </p>
        <h2 className="font-serif font-light text-stone-900 text-section mb-16">
          Education
        </h2>

        <div className="space-y-px">
          {degrees.map((edu, i) => (
            <div
              key={edu.degree}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-8 ${
                i < degrees.length - 1 ? 'border-b border-stone-100' : ''
              }`}
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl text-stone-900 font-normal mb-1">
                  {edu.degree}
                </h3>
                <p className="text-stone-500 text-sm font-sans">{edu.school}</p>
              </div>
              <div className="flex items-center gap-6 sm:text-right flex-shrink-0">
                <div>
                  <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase font-sans mb-0.5">
                    GPA
                  </p>
                  <p className="text-stone-700 text-sm font-medium font-sans">{edu.gpa}</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase font-sans mb-0.5">
                    Year
                  </p>
                  <p className="text-stone-700 text-sm font-medium font-sans whitespace-nowrap">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
