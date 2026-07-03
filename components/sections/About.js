"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { teacherInfo, aboutContent } from "@/data/portfolio";

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="About Me"
          title="Dedicated Educator & Researcher"
          description="Committed to excellence in teaching, research, and student mentorship."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedItem>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={teacherInfo.aboutImage}
                alt="Teaching in classroom"
                width={600}
                height={450}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              {aboutContent.bio}
            </p>

            <ul className="mt-8 space-y-4">
              {aboutContent.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2"
                >
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-primary-600"
                  />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary mt-8">
              Let&apos;s Collaborate
            </a>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
