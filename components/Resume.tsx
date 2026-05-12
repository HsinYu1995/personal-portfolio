import React from 'react';

const Resume = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Resume</h2>
        <p className="mb-8 text-gray-200">Download my resume to learn more about my experience.</p>
        <a href="/resume.pdf" download className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition transform hover:scale-105 inline-block font-semibold shadow-lg">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;