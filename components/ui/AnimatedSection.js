"use client";

import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/animations";

export default function AnimatedSection({
  children,
  className = "",
  id,
  delay = 0,
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedItem({ children, className = "" }) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}
