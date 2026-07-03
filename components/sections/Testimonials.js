"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <AnimatedSection id="testimonials" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Testimonials"
          title="What People Say"
          description="Kind words from colleagues, students, and collaborators."
        />

        <AnimatedItem>
          <div className="relative mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-lg sm:p-12">
              <Quote
                size={48}
                className="mb-6 text-primary-200"
                fill="currentColor"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <p className="text-lg italic leading-relaxed text-slate-600 sm:text-xl">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>

                  <div className="mt-8 flex flex-col items-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-primary-100">
                      <Image
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="mt-4 text-lg font-bold text-slate-900">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-primary-600">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:border-primary-600 hover:bg-primary-600 hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === current
                          ? "w-8 bg-primary-600"
                          : "w-2.5 bg-slate-300 hover:bg-primary-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:border-primary-600 hover:bg-primary-600 hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
