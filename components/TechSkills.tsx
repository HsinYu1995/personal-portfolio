'use client';

import React, { useState, useRef } from 'react';
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiGit, SiDocker } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const TechSkills = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    Python: SiPython,
    React: SiReact,
    'Next.js': SiNextdotjs,
    'Node.js': SiNodedotjs,
    Git: SiGit,
    Docker: SiDocker,
    'VS Code': VscCode,
  };

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const endX = e.clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentCard((prev) => (prev + 1) % skillsCategories.length);
      } else {
        setCurrentCard((prev) => (prev - 1 + skillsCategories.length) % skillsCategories.length);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentCard((prev) => (prev + 1) % skillsCategories.length);
      } else {
        setCurrentCard((prev) => (prev - 1 + skillsCategories.length) % skillsCategories.length);
      }
    }
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Tech Skills</h2>
        
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          {/* Card Container */}
          <div className="w-full max-w-md">
            <div
              className={`bg-gradient-to-br ${skillsCategories[currentCard].color} text-white p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 select-none`}
            >
              <h3 className="text-3xl font-bold mb-6">{skillsCategories[currentCard].title}</h3>
              <ul className="space-y-4 text-center flex flex-col items-center">
                {skillsCategories[currentCard].skills.map((skill, index) => {
                  const IconComponent = iconMap[skill];
                  return (
                    <li key={index} className="flex flex-col items-center gap-2">
                      {IconComponent ? (
                        <IconComponent className="text-4xl" title={skill} />
                      ) : null}
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {skillsCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentCard
                  ? 'bg-purple-500 w-8'
                  : 'bg-gray-500 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to skill ${index + 1}`}
            />
          ))}
        </div>
        
        <p className="text-center mt-8 text-gray-300 text-sm">Drag left or right to scroll</p>
      </div>
    </section>
  );
};

export default TechSkills;