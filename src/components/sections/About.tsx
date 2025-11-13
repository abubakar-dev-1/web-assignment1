"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Code, Palette, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Design Focused",
    description: "Creating beautiful UIs with attention to detail and user experience",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams and communicating ideas clearly",
  },
];

export const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better" className="bg-neutral-950 ">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
        {/* Left column - Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card gradient className="space-y-4 md:space-y-5 h-full">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
             Software Engineer & Solution Architect
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            I specialize in architecting high-performance digital platforms for complex industries. With deep expertise across Fintech, Healthcare, and Energy, I engineer secure, scalable ecosystems rather than just writing code. From implementing bank-level security protocols to visualizing real-time analytics, I build robust technical infrastructure that bridges sophisticated logic with seamless, reliable user experiences.
            </p>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              My journey in tech started with curiosity and has evolved into a
              career where I continuously learn and adapt to new technologies.
              I believe in writing clean, maintainable code and creating
              experiences that users love.
            </p>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </Card>
        </motion.div>

        {/* Right column - Highlights */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {highlights.map((highlight, idx) => (
            <Card key={idx} delay={idx * 0.1} className="space-y-3 md:space-y-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <highlight.icon className="text-white" size={22} />
              </div>
              <h4 className="text-base md:text-lg font-bold text-white leading-tight">
                {highlight.title}
              </h4>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
