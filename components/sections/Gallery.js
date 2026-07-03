"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { galleryCategories, galleryItems } from "@/data/portfolio";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const slides = filteredItems.map((item) => ({ src: item.src, title: item.title }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <AnimatedSection id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Gallery"
          title="Moments & Milestones"
          description="Capturing the journey of teaching, research, and academic celebrations."
        />

        <AnimatedItem>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${activeCategory === category
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-primary-50 hover:text-primary-600"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedItem>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.src + item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-900/0 transition-all duration-300 group-hover:bg-primary-900/60">
                  <ZoomIn
                    size={32}
                    className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <p className="mt-2 px-4 text-center text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.title}
                  </p>
                  <span className="mt-1 rounded-full bg-white/20 px-3 py-0.5 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
        />
      </div>
    </AnimatedSection>
  );
}
