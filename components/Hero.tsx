const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col px-8 md:px-16 lg:px-24 py-10 overflow-hidden">
      {/* Ambient warm light blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #FDE68A 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #FED7AA 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative flex items-center justify-between">
        <span className="text-xs tracking-[0.25em] text-stone-400 uppercase font-sans">
          Portfolio
        </span>
        <div className="flex items-center gap-6 md:gap-8">
          {[
            { label: 'Experience', href: '#experience' },
            { label: 'Skills', href: '#skills' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs tracking-wide text-stone-500 hover:text-stone-800 transition-colors duration-200 hidden sm:block font-sans"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-xs border border-stone-300 px-4 py-2 rounded-full text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 font-sans"
          >
            Resume ↓
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative flex-1 flex flex-col justify-center pt-16 pb-8">
        <p
          className="text-xs tracking-[0.35em] text-amber-700 uppercase mb-6 font-sans"
          style={{ animation: 'fadeIn 0.8s ease 0.2s both' }}
        >
          Software Engineer
        </p>

        <h1
          className="font-serif font-light leading-[0.88] mb-10 tracking-tight"
          style={{ animation: 'fadeUp 1s ease 0.05s both' }}
        >
          <span
            className="block text-stone-900"
            style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
          >
            Joe
          </span>
          <span
            className="block text-stone-900"
            style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
          >
            Lai
          </span>
        </h1>

        <div
          className="flex items-center gap-4 mb-8 origin-left"
          style={{ animation: 'fadeIn 0.8s ease 0.4s both' }}
        >
          <div className="w-12 h-px bg-amber-600" />
          <p className="text-[11px] tracking-[0.25em] text-stone-400 uppercase font-sans">
            Available for opportunities
          </p>
        </div>

        <p
          className="max-w-sm text-stone-500 leading-relaxed text-sm font-sans"
          style={{ animation: 'fadeUp 0.8s ease 0.5s both' }}
        >
          Building modern web applications with a focus on clean architecture
          and exceptional user experience. Open to roles worldwide.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="relative"
        style={{ animation: 'fadeIn 0.8s ease 1.3s both' }}
      >
        <div className="flex items-center gap-3 text-stone-400">
          <div className="w-8 h-px bg-stone-300" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
