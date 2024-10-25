import React from "react";

import Link from "next/link";

const About = () => {
  return (
    <div className="main-color-styles flex h-full max-w-[900px] flex-col gap-6 px-2 py-4 md:px-10 md:py-6">
      <div className="heading-container">
        <h2 className="text-3xl font-bold">A Bit About Me</h2>
      </div>
      <div className="text-container flex flex-col gap-4 leading-loose">
        <div className="text-group">
          <h4 className="">How It Started</h4>
          <p>
            I got into programming in 2017 when I was still a bartender. I
            started messing arond with Python but things really started taking
            traction when I first discovered web development. There&apos;s just
            something about seeing your designs come to life on a web page that
            really attracted me.
          </p>
        </div>
        <div className="text-group">
          <h4 className="">How It&apos;s going</h4>
          <p>
            Since I started in web development, I have worked at some great
            companies, met loads of fantastic people in the communnity,
            regularly joining meetups in NYC, and found my passion in life.
          </p>
        </div>
        <div className="text-group">
          <h4 className="">How to find me</h4>
          <p>
            You can find me on{" "}
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
              Email
            </Link>{" "}
            at marcanthony.webdev@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
