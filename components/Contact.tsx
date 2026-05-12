import React from 'react';

const Contact = () => {
  return (
    <section className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-blue-600 to-blue-700 text-white p-6 rounded-l-lg shadow-lg z-50 max-w-xs">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold mb-1">Email:</p>
          <a href="mailto:hsinyulai18@gmail.com" className="text-white hover:text-blue-100 underline text-sm break-all">
            hsinyulai18@gmail.com
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold mb-1">LinkedIn:</p>
          <a href="https://www.linkedin.com/in/hsinyulai/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-100 underline text-sm">
            linkedin.com/in/hsinyulai
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold mb-1">GitHub:</p>
          <a href="https://github.com/HsinYu1995" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-100 underline text-sm">
            github.com/HsinYu1995
          </a>
        </div>
        <div className="pt-4 border-t border-blue-500">
          <p className="text-sm font-semibold mb-3">Resume:</p>
          <a href="/resume.pdf" download className="block w-full bg-white text-blue-700 px-4 py-2 rounded font-semibold text-center hover:bg-blue-50 transition">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;