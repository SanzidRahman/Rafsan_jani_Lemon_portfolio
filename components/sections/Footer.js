"use client";

import { GraduationCap, Heart, ArrowUp } from "lucide-react";
import { teacherInfo, navLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <GraduationCap size={22} />
              </span>
              <span className="font-serif text-xl font-bold">{teacherInfo.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {teacherInfo.title}. Dedicated to inspiring the next generation of
              educators and researchers.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${teacherInfo.email}`}
                  className="transition-colors hover:text-primary-400"
                >
                  {teacherInfo.email}
                </a>
              </li>
              <li>{teacherInfo.phone}</li>
              <li>{teacherInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm">
            &copy; {currentYear} {teacherInfo.name}. Made with{" "}
            <Heart size={14} className="text-red-400" fill="currentColor" /> for education.
          </p>

          <a
            href="#home"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
