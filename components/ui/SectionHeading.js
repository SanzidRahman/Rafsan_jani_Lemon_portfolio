"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ subtitle, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center md:mb-16"
    >
      {subtitle && (
        <span
          className={`mb-3 inline-block text-sm font-semibold uppercase tracking-widest ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-serif text-3xl font-bold sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base sm:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mx-auto mt-5 h-1 w-16 rounded-full ${
          light ? "bg-accent-400" : "bg-primary-600"
        }`}
      />
    </motion.div>
  );
}
