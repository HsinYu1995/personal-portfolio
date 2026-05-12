import dynamic from 'next/dynamic';
import Hero from '../components/Hero';

const Experience = dynamic(() => import('../components/Experience'));
const TechSkills = dynamic(() => import('../components/TechSkills'));
const Contact    = dynamic(() => import('../components/Contact'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <TechSkills />
      <Contact />
    </main>
  );
}
