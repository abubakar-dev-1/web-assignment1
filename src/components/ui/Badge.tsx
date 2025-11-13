import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "purple" | "pink" | "blue" | "green";
  delay?: number;
}

export const Badge = ({
  children,
  className,
  variant = "default",
  delay = 0
}: BadgeProps) => {
  const variants = {
    default: "bg-neutral-800 text-neutral-200 border-neutral-700",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20"
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1 }}
      className={cn(
        "inline-flex items-center px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
};
