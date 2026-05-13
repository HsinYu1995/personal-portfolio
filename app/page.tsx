import dynamic from 'next/dynamic';
import Hero from '../components/Hero';

const Experience = dynamic(() => import('../components/Experience'));
const Projects   = dynamic(() => import('../components/Projects'));
const TechSkills = dynamic(() => import('../components/TechSkills'));
const Education  = dynamic(() => import('../components/Education'));
const Contact    = dynamic(() => import('../components/Contact'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <TechSkills />
      <Education />
      <Contact />
    </main>
  );
}
