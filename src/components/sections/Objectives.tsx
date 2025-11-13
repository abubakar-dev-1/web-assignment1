"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Target, TrendingUp, Lightbulb, Award } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Master Modern Technologies",
    description: "Continuously learning and mastering cutting-edge technologies to build better solutions",
  },
  {
    icon: TrendingUp,
    title: "Drive Innovation",
    description: "Creating innovative solutions that push boundaries and solve real-world problems",
  },
  {
    icon: Lightbulb,
    title: "Share Knowledge",
    description: "Contributing to the developer community through mentoring, writing, and open-source",
  },
  {
    icon: Award,
    title: "Deliver Excellence",
    description: "Consistently delivering high-quality work that exceeds expectations",
  },
];

export const Objectives = () => {
  return (
    <Section
      id="objectives"
      title="My Objectives"
      subtitle="What drives me forward"
      className="bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {objectives.map((objective, idx) => (
          <Card
            key={idx}
            delay={idx * 0.1}
            gradient
            className="text-center space-y-4 md:space-y-5"
          >
            <div className="w-16 h-16 md:w-18 md:h-18 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <objective.icon className="text-white" size={30} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{objective.title}</h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed text-left">
              {objective.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
