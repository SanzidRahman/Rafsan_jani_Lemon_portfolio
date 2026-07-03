"use client";

import {
  Award,
  FileText,
  Users,
  Lightbulb,
  Trophy,
  BadgeDollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { achievements } from "@/data/portfolio";

const iconMap = {
  Award,
  FileText,
  Users,
  Lightbulb,
  Trophy,
  BadgeDollarSign,
};

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Achievements"
          title="Honors & Recognition"
          description="A track record of excellence in teaching, research, and academic leadership."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary-50 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                        <Icon size={24} />
                      </div>
                      <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {item.organization}
                    </p>
                  </div>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
