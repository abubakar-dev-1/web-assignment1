"use client";

import { Section } from "../ui/Section";
import { TimelineItem } from "../ui/Timeline";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Co-founder & CMO",
    subtitle: "Gamma Developers",
    period: "2024 - Present",
    description: [
      "Co-founded and established a digital agency delivering web and software solutions",
      "Lead marketing strategies and client acquisition initiatives",
      "Oversee project management and ensure high-quality deliverables",
      "Built and managed a team of developers and designers"
    ],
  },
  {
    title: "Freelance Web Developer",
    subtitle: "Upwork",
    period: "2023 - 2024",
    description: [
      "Delivered custom web development solutions for international clients",
      "Built responsive websites and web applications using modern frameworks",
      "Managed client communications and project timelines independently",
      "Maintained high client satisfaction with 5-star ratings"
    ],
  },
  {
    title: "Web Developer",
    subtitle: "SpotMedia",
    period: "2022 - 2023",
    description: [
      "Started as a junior developer in a dynamic startup environment",
      "Developed and maintained web applications using modern technologies",
      "Collaborated with cross-functional teams to deliver client projects",
      "Gained hands-on experience in full-stack web development"
    ],
  },
];

export const Experience = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey"
      className="bg-neutral-900"
    >
      <div className="max-w-4xl mx-auto space-y-2">
        {experiences.map((exp, idx) => (
          <TimelineItem
            key={idx}
            title={exp.title}
            subtitle={exp.subtitle}
            period={exp.period}
            description={exp.description}
            icon={<Briefcase size={20} />}
            delay={idx * 0.1}
          />
        ))}
      </div>
    </Section>
  );
};
