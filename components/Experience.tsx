import React from 'react';

const Experience = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Work & Project Experience</h2>
        <div className="space-y-8">
          <div className="bg-slate-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold text-white">Job Title</h3>
            <p className="text-gray-300">MathWorks | Feb 2022 - Apr 2026</p>
            <p className="mt-4 text-gray-200">Description of your role and achievements.</p>
          </div>
          <div className="bg-slate-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold text-white">Stiich</h3>
            <p className="text-gray-300">Technologies Used: React Native</p>
            <p className="mt-4 text-gray-200">Description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;