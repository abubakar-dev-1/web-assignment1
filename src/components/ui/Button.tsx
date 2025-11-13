import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  style
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 inline-flex items-center justify-center";
  const defaultStyle = style;

  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/50",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
  };

  const Component = motion[href ? "a" : "button"];

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      style={defaultStyle}
    >
      {children}
    </Component>
  );
};
