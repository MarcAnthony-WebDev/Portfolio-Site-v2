'use client';

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container-styles"
    >
      {/* Heading */}
      <motion.div variants={fadeInUp} className="heading-container text-left">
        <h2 className="page-heading">A Bit About Me</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl  mt-2">
          {`A short glimpse into where I started, where I'm going, and what I'm passionate about.`}
        </p>
      </motion.div>

      {/* Body Sections */}
      <motion.div
        variants={fadeInUp}
        className="text-container flex flex-col gap-16 leading-relaxed max-w-3xl mx-auto"
      >
        {/* HOW IT STARTED */}
        <section className="text-group flex flex-col gap-3">
          <span className="text-sm tracking-wide text-yellow-500 uppercase font-medium">How It Started</span>
          <h3 className="text-2xl font-bold text-light-color dark:text-dark-color">From Bartending to Building</h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            {`Based in Long Island, NY, my journey into programming began in 2017 while I was working as a bartender.
            It all started with tinkering around with Python and Java, leading to my very first project: a tip-out
            calculator for my fellow bartenders. The program calculated each bartender’s and barback’s share of
            the total tips — a simple idea, but one that sparked my passion for coding.`}
            <br /><br />
            {`From there, I dove into the core web development stack, building a solid foundation. Over time, I honed
            my skills further, specializing in React and Next.js, and turning my curiosity into a career I love.`}
          </p>
        </section>

        {/* HOW IT'S GOING */}
        <section className="text-group flex flex-col gap-3">
          <span className="text-sm tracking-wide text-yellow-500 uppercase font-medium">How It’s Going</span>
          <h3 className="text-2xl font-bold text-light-color dark:text-dark-color">Web Dev + Community</h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            {`Since starting my journey in web development, I’ve had the privilege of working at some amazing companies,
            building professional websites that truly make an impact. Along the way, I’ve met incredible people in the
            tech community, regularly attending meetups in NYC to exchange ideas and grow my skills.`}
            <br /><br />
            {`Through this career, I’ve discovered not only my passion for creating exceptional web experiences,
            but also a deep connection to the vibrant, creative community that fuels it.
            On a personal note, 2024 was a milestone year for me — I married the love of my life,
            making this journey even more meaningful. 😊`}
          </p>
        </section>

        {/* INTERESTS */}
        <section className="text-group flex flex-col gap-3">
          <span className="text-sm tracking-wide text-yellow-500 uppercase font-medium">Beyond the Code</span>
          <h3 className="text-2xl font-bold text-light-color dark:text-dark-color">My Interests</h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            {`My interests span across the creative and analytical — I love playing the guitar,
            reading short stories (especially from the Russian greats like Chekhov and Dostoyevsky),
            and watching Tarantino films. You’ll also often find me building small apps and tools
            that make everyday life easier — I just enjoy creating things that solve real problems.`}
          </p>
        </section>

        {/* CONTACT */}
        <section className="text-group flex flex-col gap-3">
          <span className="text-sm tracking-wide text-yellow-500 uppercase font-medium">Let’s Connect</span>
          <h3 className="text-2xl font-bold text-light-color dark:text-dark-color">How to Find Me</h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            {`I'd love to hear from you! Whether it's for work, a collaboration, or just to connect —
            you can find me on`}{" "}
            <Link
              className="font-semibold underline hover:text-yellow-500"
              href="https://tinyurl.com/mu88t4s9"
              target="_blank"
            >
              LinkedIn
            </Link>{" "}
            and{" "}
            <Link
              href="https://tinyurl.com/5daa4cf6"
              target="_blank"
              className="font-semibold underline hover:text-yellow-500"
            >
              GitHub
            </Link>
            , or{" "}
            <Link href="/contact" className="font-semibold underline hover:text-yellow-500">
              send me a message directly
            </Link>
            .
          </p>

          <Link
            passHref
            href="/contact"
            className="arrow-link group mt-3 flex w-max flex-row items-center gap-2 hover:underline text-lg font-medium text-blue-600 dark:text-blue-400"
          >
            Send Me A Message
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
          </Link>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default About;
