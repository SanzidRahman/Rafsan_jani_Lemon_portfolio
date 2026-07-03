"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { books } from "@/data/portfolio";

export default function Books() {
  return (
    <AnimatedSection id="books" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Publications"
          title="Books & Authored Works"
          description="Published works contributing to the field of education and research methodology."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <AnimatedItem key={book.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <BookOpen size={40} className="text-white" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                    {book.year}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-slate-900">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{book.publisher}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {book.description}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-800">
                    View Details
                    <ExternalLink size={14} />
                  </button>
                </div>
              </motion.article>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
