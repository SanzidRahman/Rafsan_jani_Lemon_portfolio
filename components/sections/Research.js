"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookMarked, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { researchSupervision } from "@/data/portfolio";

export default function Research() {
  return (
    <AnimatedSection
      id="research"
      className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white"
    >
      <div className="container-custom">
        <SectionHeading
          subtitle="Research & Supervision"
          title="Guiding the Next Generation"
          description={researchSupervision.intro}
          light
        />

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchSupervision.stats.map((stat) => (
            <AnimatedItem key={stat.label}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
              >
                <p className="text-3xl font-bold text-accent-400 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedItem>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/20 text-accent-400">
                  <BookMarked size={20} />
                </div>
                <h3 className="text-xl font-bold">Research Areas</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {researchSupervision.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 text-sm transition-colors duration-300 hover:bg-white/10"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/20 text-accent-400">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-bold">Current Supervisees</h3>
              </div>
              <ul className="space-y-4">
                {researchSupervision.currentStudents.map((student) => (
                  <li
                    key={student.name}
                    className="group flex items-start gap-4 rounded-lg bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600/50 text-white">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="font-semibold">{student.name}</p>
                      <p className="text-sm text-slate-300">{student.topic}</p>
                      <span className="mt-1 inline-block rounded-full bg-accent-500/20 px-2 py-0.5 text-xs text-accent-300">
                        {student.level}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
