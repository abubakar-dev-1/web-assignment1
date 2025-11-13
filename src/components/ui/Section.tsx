import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section = ({
  id,
  children,
  className,
  title,
  subtitle
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(" py-16 md:py-24 lg:py-16 px-4 md:px-6 lg:px-8", className)}
    >
      <div className="max-w-7xl mx-auto ">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent mb-4 md:mb-6"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
