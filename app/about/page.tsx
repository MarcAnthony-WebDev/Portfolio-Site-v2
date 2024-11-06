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
            I got into programming in 2017 when I was still a bartender. I
            started messing arond with Python but things really started taking
            traction when I first discovered web development. There&apos;s just
            something about seeing your designs come to life on a web page that
            really attracted me.
          </p>
        </div>
        <div className="text-group flex flex-col gap-2">
          <h4 className="">HOW IT&apos;S GOING</h4>
          <p>
            Since I started in web development, I have worked at some great
            companies, met loads of fantastic people in the communnity,
            regularly joining meetups in NYC, and found my passion in life.
          </p>
        </div>
        <div className="text-group flex flex-col gap-2">
          <h4 className="">HOW TO FIND ME</h4>
          <p>
            I&apos;d love to hear from you! You can find me on{" "}
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
            </Link>{" "}
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
