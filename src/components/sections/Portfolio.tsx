"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
const projects = [
  {
    title: "Cost Savvy - Health Care Platform",
    description: "Engineered a comprehensive healthcare platform integrating real-time price comparison, secure insurance verification, and provider ratings to empower consumer decision-making via a mobile-responsive interface.",
    image: "/costsavvy.jpg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "METER - AI powered energy cost cutting assistance",
    description: "Developed a full-stack energy management platform featuring an AI-driven analytics engine for predictive cost modeling, real-time anomaly detection, and automated billing reconciliation across multiple utility providers.",
    image: "/meter.png",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Custom Computers",
    description: " Developed a full-stack PC building platform using React and Node.js, featuring real-time algorithmic compatibility checks, a live price aggregation engine, and intelligent component recommendations based on budget and performance metrics. application with real-time messaging, file sharing, video calls, and end-to-end encryption.",
    image: "/custom.jpg",
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "Cars Bn - Selling and Buying",
    description: "Developed a cross-platform automotive marketplace (Web, iOS, Android) using Next.js and React Native, featuring real-time messaging, advanced search algorithms, and a robust Node.js admin backend for fraud detection.",
    image: "/carsbn.png",
    gradient: "from-green-500 to-blue-500",
  },
  {
    title: "D360 - Saudi First Digital Bank",
    description: "Architected a PCI-DSS compliant digital banking ecosystem integrating Saudi payment networks (SADAD, mada) and biometric security, featuring a fully localized Arabic/English interface across mobile and web.",
    image: "/d360.png",
  
    gradient: "from-yellow-500 to-pink-500",
  },
  {
    title: "Dialed Moods - Energy supplements E-com",
    description: "Developed a high-conversion WooCommerce platform featuring custom subscription models, automated retention marketing, and age verification compliance to drive recurring revenue for a wellness brand.",
    image: "/dialed.png",
   
    gradient: "from-indigo-500 to-purple-500",
  },
];

export const Portfolio = () => {
  return (
    <Section
      id="portfolio"
      title="Portfolio"
      subtitle="Some of my recent projects"
      className="bg-neutral-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            delay={idx * 0.1}
            className="group overflow-hidden p-0"
          >
            {/* Project Image */}
            <div className="relative h-40 md:h-52 overflow-hidden bg-neutral-800">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center text-neutral-600"
              >
                {/* Placeholder for project image */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-50">
                  {project.title.charAt(0)}
                </div>
              </motion.div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent  transition-opacity duration-300 flex items-end justify-center gap-2 ">
                <Image src={project.image} alt={project.title} width={400} height={600} className="object-cover"	 />
              </div>
            </div>

            {/* Project Details */}
            <div className="p-5  space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all leading-tight">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
             
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
