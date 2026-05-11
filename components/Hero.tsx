import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Joe Lai</h1>
        <p className="text-xl md:text-2xl mb-8">Software Engineer</p>
        <p className="text-lg max-w-2xl mx-auto">
          Looking for Software Engineer roles worldwide with expertise in building modern web applications.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600 px-4 py-2 rounded">Skill 1</span>
            <span className="bg-blue-600 px-4 py-2 rounded">Skill 2</span>
            <span className="bg-blue-600 px-4 py-2 rounded">Skill 3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;