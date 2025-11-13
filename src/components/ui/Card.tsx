import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  delay?: number;
}

export const Card = ({
  children,
  className,
  hover = true,
  gradient = false,
  delay = 0
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "relative rounded-xl md:rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 md:p-6 lg:p-8 backdrop-blur-sm",
        gradient && "bg-gradient-to-br from-neutral-900 to-neutral-950",
        hover && "transition-shadow hover:shadow-xl hover:shadow-purple-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
