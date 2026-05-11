import React from 'react';

const TechSkills = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>Docker</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;