import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <Experience />
      <ContactSection />
    </>
  );
}
