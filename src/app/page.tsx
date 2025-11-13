import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Objectives } from "@/components/sections/Objectives";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/ui/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <Hero />
      <About />
      <Objectives />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
    </main>
  );
}
