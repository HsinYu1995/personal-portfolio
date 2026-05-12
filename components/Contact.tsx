import { FiMail, FiLinkedin, FiGithub, FiDownload } from 'react-icons/fi';

const links = [
  {
    label: 'Email',
    value: 'hsinyulai18@gmail.com',
    href: 'mailto:hsinyulai18@gmail.com',
    Icon: FiMail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hsinyulai',
    href: 'https://www.linkedin.com/in/hsinyulai/',
    Icon: FiLinkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/HsinYu1995',
    href: 'https://github.com/HsinYu1995',
    Icon: FiGithub,
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-28 bg-stone-900">
      <div className="max-w-4xl">
        <p className="text-[11px] tracking-[0.3em] text-amber-500 uppercase mb-3 font-sans">
          Get in touch
        </p>
        <h2
          className="font-serif font-light text-white text-section mb-4"
        >
          Contact
        </h2>
        <p className="text-stone-400 text-sm mb-16 max-w-sm leading-relaxed font-sans">
          Open to new opportunities and collaborations. Feel free to reach out —
          I&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {links.map(({ label, value, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex flex-col gap-3 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-stone-500 p-6 rounded-2xl transition-all duration-200"
            >
              <Icon className="text-stone-400 group-hover:text-amber-400 text-xl transition-colors duration-200" />
              <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-sans">{label}</p>
              <p className="text-stone-300 text-sm group-hover:text-white transition-colors duration-200 break-all font-sans">
                {value}
              </p>
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 group font-sans"
        >
          <FiDownload className="group-hover:translate-y-0.5 transition-transform duration-200" />
          Download Resume
        </a>

        <div className="mt-24 pt-8 border-t border-stone-800">
          <p className="text-xs text-stone-600 tracking-wide font-sans">
            © {new Date().getFullYear()} Joe Lai. Built with Next.js.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
