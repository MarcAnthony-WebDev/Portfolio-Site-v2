
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Brands } from '@/components';
import { FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container-styles"
    >
      {/* Hero Section */}
      <motion.div variants={fadeInUp} className="heading-container flex flex-col items-start text-left gap-4">
        <h1 className="page-heading">Hello, I&apos;m Marcanthony</h1>
        <p className="text-2xl sm:text-3xl text-neutral-700 dark:text-neutral-300">
          React & Next.js Developer crafting modern web experiences.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Brands />
        </div>
      </motion.div>

      {/* Content Sections */}
      <motion.div variants={fadeInUp} className="text-container  flex flex-col gap-16 leading-relaxed max-w-3xl">
        {/* About Me */}
        <section className="text-group flex flex-col gap-3">
          <span className="text-sm tracking-wide text-yellow-500 uppercase font-medium">About Me</span>
          <h2 className="text-2xl font-bold text-light-color dark:text-dark-color">Clean Code & Creative Problem Solving</h2>
          <p className=" text-neutral-700 dark:text-neutral-300">
            I enjoy all things web design and development. My focus is building performant, elegant websites using
            modern tools like React, TypeScript, Next.js & Tailwind CSS.
            I love creating things that are both clean under the hood and a pleasure to use.
          </p>
          <Link
            href="/about"
            className="arrow-link group mt-2 flex w-max flex-row items-center gap-2 hover:underline text-blue-600 dark:text-blue-400"
          >
            Learn More
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
          </Link>
        </section>

        {/* My Work */}
        <section className="text-group flex flex-col gap-3">
          <span className="text-sm tracking-wide text-yellow-500 uppercase font-medium">My Work</span>
          <h2 className="text-2xl font-bold text-light-color dark:text-dark-color">Design + Functionality</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            I specialize in building responsive, accessible web apps with thoughtful UI and UX. Whether developing
            full-stack platforms or marketing sites, I aim to bridge design and engineering to deliver real value.
          </p>
          <Link
            href="/portfolio"
            className="arrow-link group mt-2 flex w-max flex-row items-center gap-2 hover:underline text-blue-600 dark:text-blue-400"
          >
            View My Recent Work
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
          </Link>
        </section>

        {/* Resume */}
        <motion.div variants={fadeInUp} className="button-group mt-4 flex justify-start">
          <Link
            href="/documents/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="sm:text-lg flex items-center gap-2 rounded-full bg-neutral-300 px-6 py-3 text-light-color transition duration-200 hover:bg-neutral-400 active:translate-y-1 dark:bg-slate-600 dark:text-dark-color hover:dark:bg-slate-500">
              <FileText />
              See My Resume
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
