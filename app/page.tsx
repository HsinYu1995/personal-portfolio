import Hero from '../components/Hero';
import Experience from '../components/Experience';
import TechSkills from '../components/TechSkills';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

export default function Home() {
  return (
    <main>
      <Resume />
      <Hero />
      <Experience />
      <TechSkills />
      <Contact />
    </main>
  );
}