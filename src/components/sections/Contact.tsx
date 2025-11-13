"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mianabubaka007@gmail.com",
    href: "mailto:mianabubaka007@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 304 5570099",
    href: "tel:+923045570099",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/abubakar-dev-1" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/Mianabu10334473" },
];

export const Contact = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's work together on your next project"
      className="bg-gradient-to-b from-neutral-900 to-neutral-950"
    >
      <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card gradient>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 leading-tight">Send me a message</h3>
          <form className="space-y-5 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5 md:mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm md:text-base placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5 md:mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm md:text-base placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5 md:mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm md:text-base placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <Button variant="primary" className="w-full !text-sm md:!text-base">
              <Send size={16} className="mr-2" />
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6 md:space-y-8">
          <Card gradient>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 leading-tight">Contact Information</h3>
            <div className="space-y-5 md:space-y-7">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 md:gap-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-400">{info.label}</p>
                    <p className="text-white text-sm md:text-base font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </Card>

          <Card gradient>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 leading-tight">Follow Me</h3>
            <div className="flex gap-4 md:gap-5">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </Card>

          <Card gradient className="text-center">
            <p className="text-neutral-400 text-xs md:text-sm">
              Available for freelance opportunities and collaborations
            </p>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-3 md:mt-4 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs md:text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </motion.div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 md:mt-20 lg:mt-24 pt-8 md:pt-10 border-t border-neutral-800 text-center"
      >
        <p className="text-neutral-500 text-sm md:text-base mb-2">
          © {new Date().getFullYear()} M.Abubakar. All rights reserved.
        </p>
        <p className="text-neutral-600 text-xs md:text-sm">
          Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
        </p>
      </motion.div>
    </Section>
  );
};
