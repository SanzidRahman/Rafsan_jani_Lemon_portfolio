"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import { teacherInfo } from "@/data/portfolio";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 grid items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="order-2 lg:order-1"
        >
          <motion.span
            variants={fadeInLeft}
            className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700"
          >
            Welcome to My Portfolio
          </motion.span>

          <motion.h1
            variants={fadeInLeft}
            className="font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {teacherInfo.name}
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            className="mt-2 text-lg font-medium text-primary-600 sm:text-xl"
          >
            {teacherInfo.title}
          </motion.p>

          <motion.p
            variants={fadeInLeft}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {teacherInfo.tagline}
          </motion.p>

          <motion.div
            variants={fadeInLeft}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href={teacherInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin size={18} />
              Connect
            </a>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            className="mt-12 flex gap-8 border-t border-slate-200 pt-8"
          >
            {[
              { value: "18+", label: "Years Experience" },
              { value: "45+", label: "Publications" },
              { value: "30+", label: "Students Mentored" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary-600 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-900/20 to-transparent" />
              <Image
                src={teacherInfo.heroImage}
                alt={teacherInfo.name}
                width={500}
                height={625}
                className="h-auto w-full max-w-md object-cover sm:max-w-lg"
                priority
              />
            </motion.div>

            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border-2 border-primary-200" />
            <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-accent-400/30 blur-xl sm:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-primary-400/20 blur-xl sm:block" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-primary-600"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
