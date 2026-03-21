import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { SkillSearch } from './components/sections/SkillSearch';
import { Career } from './components/sections/Career';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { BackToTop } from './components/ui/BackToTop';

export default function App() {
  return (
    <div className="bg-bg text-text-main min-h-screen selection:bg-accent/20 selection:text-accent">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SkillSearch />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
