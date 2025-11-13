"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
      "HTML5", "CSS3", "Redux", "Framer Motion", "GSAP"
    ],
    color: "purple" as const,
  },
  {
    category: "Backend",
    skills: [
      "Node.js", "Express", "Python", "PostgreSQL",
      "MongoDB", "REST API", "GraphQL", "Redis", "Docker"
    ],
    color: "pink" as const,
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS", "Google Cloud Platform", "EC2", "S3", "Lambda",
      "Cloud Functions", "Firebase", "Vercel", "CI/CD", "Docker"
    ],
    color: "blue" as const,
  },
  {
    category: "Tools & Others",
    skills: [
      "Git", "GitHub", "VS Code", "Figma", "Postman",
      "Jest", "Webpack", "Agile", "Scrum", "IoT Development"
    ],
    color: "purple" as const,
  },
];

export const Skills = () => {
  return (
    <Section
      id="skills"
      title="Professional Skills"
      subtitle="Technologies and tools I work with"
      className="bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div className="space-y-6 md:space-y-8 lg:space-y-10">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            <Card gradient>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-7 flex items-center gap-3 md:gap-4 leading-tight">
                <span className="w-1.5 md:w-2 h-7 md:h-9 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    variant={category.color}
                    delay={catIdx * 0.1 + skillIdx * 0.05}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Skill Progress Bars (Optional Alternative View) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 md:mt-16 lg:mt-20"
      >
        <Card gradient>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 leading-tight">Proficiency Levels</h3>
          <div className="space-y-5 md:space-y-7">
            {[
              { name: "React / Next.js", level: 95 },
              { name: "TypeScript / JavaScript", level: 90 },
              { name: "Node.js / Backend", level: 85 },
              { name: "AWS / Cloud Services", level: 80 },
              { name: "Database Management", level: 85 },
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-neutral-300 text-sm md:text-base font-medium">{skill.name}</span>
                  <span className="text-purple-400 text-sm md:text-base font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 md:h-3.5 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/30"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};
