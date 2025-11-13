"use client";

import { Section } from "../ui/Section";
import { TimelineItem } from "../ui/Timeline";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Bachelor of Science in Computer Science (BSCS)",
    subtitle: "University of Management and Technology (UMT)",
    period: "2022 - Present",
    description: [
      "Currently pursuing BSCS degree with 50% merit scholarship",
      "Specializing in software development and web technologies",
      "Engaged in various academic projects and practical implementations",
      "Relevant coursework: Data Structures, Web Development, Database Systems, OOP"
    ],
  },
  {
    title: "FSC Pre-Engineering",
    subtitle: "Punjab Group of Colleges",
    period: "2020 - 2022",
    description: [
      "Completed FSC with 87% marks",
      "Awarded 70% merit scholarship for academic excellence",
      "Strong foundation in mathematics and sciences",
      "Developed analytical and problem-solving skills"
    ],
  },
  {
    title: "Matriculation (SSC)",
    subtitle: "KIPS School System",
    period: "2019 - 2020",
    description: [
      "Completed matriculation with outstanding 93% marks",
      "Built strong foundation in core subjects",
      "Demonstrated consistent academic excellence",
      "Developed discipline and time management skills"
    ],
  },
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Amazon Web Services",
    period: "2024",
    description: "Professional certification for designing and deploying scalable systems on AWS cloud infrastructure",
  },
  {
    title: "Full Stack Development Certificate",
    subtitle: "HackerRank",
    period: "2023",
    description: "Certified in full stack web development including frontend and backend technologies",
  },
  {
    title: "IoT Competition Winner - Gesture Control Car",
    subtitle: "IoT Innovation Challenge",
    period: "2023",
    description: "Won first place for developing an innovative gesture-controlled car using IoT sensors and microcontrollers",
  },
];

export const Education = () => {
  return (
    <Section
      id="education"
      title="Education & Certifications"
      subtitle="Academic background and professional certifications"
      className="bg-gradient-to-b from-neutral-900 to-neutral-950"
    >
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
        {/* Education */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 md:mb-10 flex items-center gap-3 md:gap-4 leading-tight">
            <span className="w-1.5 md:w-2 h-7 md:h-9 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            Education
          </h3>
          {education.map((edu, idx) => (
            <TimelineItem
              key={idx}
              title={edu.title}
              subtitle={edu.subtitle}
              period={edu.period}
              description={edu.description}
              icon={<GraduationCap size={20} />}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 md:mb-10 flex items-center gap-3 md:gap-4 leading-tight">
            <span className="w-1.5 md:w-2 h-7 md:h-9 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            Certifications
          </h3>
          {certifications.map((cert, idx) => (
            <TimelineItem
              key={idx}
              title={cert.title}
              subtitle={cert.subtitle}
              period={cert.period}
              description={cert.description}
              icon={<GraduationCap size={20} />}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
