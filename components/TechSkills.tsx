'use client';

import React, { useState } from 'react';

const TechSkills = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const skillsCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Next.js', 'Node.js'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'VS Code'],
      color: 'from-green-500 to-green-600',
    },
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % skillsCategories.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + skillsCategories.length) % skillsCategories.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Skills</h2>
        
        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition transform hover:scale-110"
            aria-label="Previous skill"
          >
            ←
          </button>

          {/* Card Container */}
          <div className="w-full max-w-md">
            <div
              className={`bg-gradient-to-br ${skillsCategories[currentCard].color} text-white p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105`}
            >
              <h3 className="text-3xl font-bold mb-6">{skillsCategories[currentCard].title}</h3>
              <ul className="space-y-3 text-center">
                {skillsCategories[currentCard].skills.map((skill, index) => (
                  <li key={index} className="text-lg font-semibold">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition transform hover:scale-110"
            aria-label="Next skill"
          >
            →
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {skillsCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentCard
                  ? 'bg-gray-800 w-8'
                  : 'bg-gray-400 w-3 hover:bg-gray-600'
              }`}
              aria-label={`Go to skill ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;