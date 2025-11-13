import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string | string[];
  icon?: ReactNode;
  delay?: number;
}

export const TimelineItem = ({
  title,
  subtitle,
  period,
  description,
  icon,
  delay = 0
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-6 md:pl-8 pb-8 md:pb-10 lg:pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className="absolute left-[-3px] md:left-[-4px] top-1 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
      />

      {/* Content */}
      <div className="space-y-2 md:space-y-3">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white flex items-center gap-2">
              {icon && <span className="text-purple-400 flex-shrink-0">{icon}</span>}
              <span className="break-words">{title}</span>
            </h3>
            <p className="text-purple-400 text-sm md:text-base font-medium">{subtitle}</p>
          </div>
          <span className="text-xs md:text-sm text-neutral-500 font-medium px-2.5 py-1 md:px-3 md:py-1 rounded-full bg-neutral-800/50 border border-neutral-700 whitespace-nowrap flex-shrink-0">
            {period}
          </span>
        </div>

        {description && (
          <div className="text-neutral-400 text-xs md:text-sm space-y-1 mt-2 md:mt-3">
            {Array.isArray(description) ? (
              <ul className="list-disc list-inside space-y-1 md:space-y-1.5">
                {description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="leading-relaxed">{description}</p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
