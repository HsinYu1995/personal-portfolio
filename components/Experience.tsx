import React from 'react';

const Experience = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work & Project Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Job Title</h3>
            <p className="text-gray-600">MathWorks | Feb 2022 - Apr 2026</p>
            <p className="mt-4">Description of your role and achievements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Stiich</h3>
            <p className="text-gray-600">Technologies Used: React Native</p>
            <p className="mt-4">Description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;