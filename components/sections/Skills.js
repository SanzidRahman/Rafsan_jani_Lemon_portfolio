"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Expertise"
          title="Skills & Competencies"
          description="Core competencies developed through years of teaching, research, and academic leadership."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {skills.map((skill, index) => (
            <AnimatedItem key={skill.name}>
              <div className="group">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-primary-600">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-primary-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
                  />
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Microsoft Office Suite",
              "SPSS & NVivo",
              "LMS Platforms",
              "LaTeX & Overleaf",
              "Zoom & Teams",
              "Google Workspace",
              "Mendeley & Zotero",
              "Canvas & Moodle",
            ].map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.05, backgroundColor: "#e0effe" }}
                className="cursor-default rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm transition-shadow hover:shadow-md"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
