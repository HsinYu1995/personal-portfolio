import React from 'react';

const Resume = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Resume</h2>
        <p className="mb-8">Download my resume to learn more about my experience.</p>
        <a href="/resume.pdf" download className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;