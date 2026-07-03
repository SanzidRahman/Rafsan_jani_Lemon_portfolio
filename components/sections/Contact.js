"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  BookOpen,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection, { AnimatedItem } from "@/components/ui/AnimatedSection";
import { teacherInfo } from "@/data/portfolio";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactDetails = [
    { icon: Mail, label: "Email", value: teacherInfo.email, href: `mailto:${teacherInfo.email}` },
    { icon: Phone, label: "Phone", value: teacherInfo.phone, href: `tel:${teacherInfo.phone}` },
    { icon: MapPin, label: "Location", value: teacherInfo.location, href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, href: teacherInfo.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: teacherInfo.social.twitter, label: "Twitter" },
    { icon: BookOpen, href: teacherInfo.social.googleScholar, label: "Google Scholar" },
  ];

  return (
    <AnimatedSection id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Contact"
          title="Get In Touch"
          description="Have a question or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedItem className="lg:col-span-2">
            <div className="space-y-6">
              {contactDetails.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-800 transition-colors hover:text-primary-600"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-800">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="pt-4">
                <p className="mb-4 text-sm font-semibold text-slate-500">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-all duration-300 hover:border-primary-600 hover:bg-primary-600 hover:text-white"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl bg-slate-50 p-6 shadow-md sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="user_name" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  placeholder="Collaboration Inquiry"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-sm text-green-600"
                >
                  <CheckCircle size={18} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-sm text-red-600"
                >
                  <AlertCircle size={18} />
                  Failed to send. Please configure EmailJS keys or email directly.
                </motion.p>
              )}
            </form>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
