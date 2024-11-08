import React from "react";

import { ArrowRight } from "lucide-react";

import Link from "next/link";

const About = () => {
  return (
    <div className="container-styles">
      <div className="heading-container">
        <h2 className="text-5xl font-bold md:text-6xl">A Bit About Me</h2>
      </div>
      <div className="text-container flex flex-col gap-12 leading-loose">
        <div className="text-group flex flex-col gap-2">
          <h4 className="">HOW IT STARTED</h4>
          <p>
            Based in Long Island, NY, I got into programming in 2017 when I was
            still a bartender. I first started messing around with Python and
            Java. I remember my first project, a tip out calculator for my
            fellow bartenders. The program would take in the total tips as an
            input and output the share for each bartender and barback. It was a
            simple project but it really ignited my passion for programming. I
            soon after learned the core Web Development stack and later on
            specialized in React and Next.js.
          </p>
        </div>
        <div className="text-group flex flex-col gap-2">
          <h4 className="">HOW IT&apos;S GOING</h4>
          <p>
            Since I started in web development, I have worked at some great
            companies, met loads of fantastic people in the community, regularly
            joining meetups in NYC, and found my passion in life. I also met the
            love of my life and we married in 2024 😀.
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
            I&apos;d love to hear from you! Whether is be for work,
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
