import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
        <div className="space-y-4">
          <p><strong>Email:</strong> <a href="mailto:hsinyulai18@gmail.com" className="text-blue-600">hsinyulai18@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hsinyulai/" className="text-blue-600">linkedin.com/in/hsinyulai</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/HsinYu1995" className="text-blue-600">github.com/HsinYu1995</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;