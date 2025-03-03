import React from "react";

import { ArrowRight } from "lucide-react";

import Link from "next/link";

const About = () => {
  return (
    <div className="container-styles">
      <div className="heading-container">
        <h2 className="page-heading">A Bit About Me</h2>
      </div>
      <div className="text-container flex flex-col gap-12 leading-loose">
        <div className="text-group flex flex-col gap-2">
          <h4 className="">HOW IT STARTED</h4>
          <p>
            Based in Long Island, NY, my journey into programming began in 2017
            while I was working as a bartender. It all started with tinkering
            around with Python and Java, leading to my very first project: a
            tip-out calculator for my fellow bartenders. The program calculated
            each bartender’s and barback’s share of the total tips—a simple
            idea, but one that sparked my passion for coding. From there, I dove
            into the core web development stack, building a solid foundation.
            Over time, I honed my skills further, specializing in React and
            Next.js, and turning my curiosity into a career I love.
          </p>
        </div>
        <div className="text-group flex flex-col gap-2">
          <h4 className="">HOW IT&apos;S GOING</h4>
          <p>
            Since I started my journey in web development, I’ve had the
            privilege of working at some amazing companies, building
            professional websites for clients that truly make an impact. Along
            the way, I’ve met incredible people in the tech community, regularly
            attending meetups in NYC to exchange ideas and grow my skills.
            Through this career, I’ve discovered not only my passion for
            creating exceptional web experiences but also a deep connection to
            the vibrant, creative community that fuels it. On a personal note,
            2024 was a milestone year for me—I married the love of my life,
            making my journey even more meaningful. 😊
          </p>
        </div>
        <div className="text-group flex flex-col gap-2">
          <h4 className="">MY INTERESTS</h4>
          <p>
            My interests include many things such as playing the guitar, reading
            short stories, particularly those of the Russian greats such as
            Chekhov and Dostoyevsky, and watching Tarantino films. On my free
            time you can find me building out small projects and web apps. I
            really enjoy creating things that expedite my life in some way.
          </p>
        </div>

        <div className="text-group flex flex-col gap-2">
          <h4 className="">HOW TO FIND ME</h4>
          <p>
            I&apos;d love to hear from you! Whether it be for work,
            collaboration on a project or just to connect, you can find me on{" "}
            <Link
              className="font-bold hover:underline"
              href="https://tinyurl.com/mu88t4s9"
              target="_blank"
            >
              LinkedIn
            </Link>{" "}
            &{" "}
            <Link
              href="https://tinyurl.com/5daa4cf6"
              target="_blank"
              className="font-bold hover:underline"
            >
              Github
            </Link>{" "}
            or you can send me an{" "}
            <Link href="contact" className="font-bold hover:underline">
              Email Here
            </Link>
            .
          </p>
          <Link
            passHref
            href="/contact"
            className="group mt-2 flex w-max flex-row items-center gap-2 hover:underline"
          >
            Send Me A Message
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
