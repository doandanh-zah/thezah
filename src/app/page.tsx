import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Achievements from "@/components/sections/Achievements";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import KonamiCode from "@/components/KonamiCode";

export default function Home() {
  return (
    <>
      <KonamiCode />
      <Hero />
      <About />
      <Timeline />
      <Achievements />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}
