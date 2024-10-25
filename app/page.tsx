import Image from "next/image";
import { Brands } from "@/components";

import Link from "next/link";

export default function Home() {
  return (
    <div className="main-color-styles flex h-full max-w-[900px] flex-col gap-6 px-2 py-4 md:px-10 md:py-6">
      <div className="heading-container flex flex-col">
        <h2 className="text-6xl font-bold">Hello I&apos;m Marcanthony</h2>
        <p className="text-3xl">I am a React Developer</p>
        <div className="brand-container mt-2 flex gap-4">
          <Brands />
        </div>
      </div>
      <div className="text-container flex flex-col gap-4 leading-loose">
        <div className="text-group">
          <h4 className="">Technical Skills</h4>
          <p>
            I use technologies like React, TypeScript, Next.js & Tailwind CSS to
            build fast and clean websites & web applications.
          </p>
        </div>
        <div className="text-group">
          <h4 className="">How It&apos;s going</h4>
          <p>
            Since I started in web development, I have worked at some great
            companies, met loads of fantastic people in the community, regularly
            joining meetups in NYC, and found my passion in life.
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
}
