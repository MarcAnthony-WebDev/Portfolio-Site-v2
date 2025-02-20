import Image from "next/image";
import { Brands } from "@/components";
import { FileText, ArrowRight, Github } from "lucide-react";

import Link from "next/link";

export default function Home() {
  console.log('new branch changes')
  console.log('new branch changes')
  console.log('new branch changes')
  return (
    <div className="container-styles">
      <div className="heading-container flex flex-col">
        <h2 className="text-5xl font-bold md:text-6xl">
          Hello I&apos;m Marcanthony
        </h2>
        <p className="text-3xl">I am a React Developer</p>
        <div className="brand-container mt-2 flex gap-4">
          <Brands />
        </div>
      </div>
      <div className="text-container flex flex-col gap-12 leading-loose">
        <div className="text-group flex flex-col gap-2">
          <h4 className="">ABOUT ME</h4>
          <p>
            I enjoy all things web design and I use technologies like React,
            TypeScript, Next.js & Tailwind CSS to build fast and clean websites
            & web applications.
          </p>

          <Link
            passHref
            href="/about"
            className="group mt-2 flex w-max flex-row items-center gap-2 hover:underline"
          >
            Learn More{" "}
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
          </Link>
        </div>
        <div className="text-group flex flex-col gap-2">
          <h4 className="">My Work</h4>
          <p>
            I specialize in creating digital experiences that connect design and
            functionality. My portfolio reflects a blend of creativity,
            technical expertise, and attention to detail, whether it’s
            developing fully responsive websites or designing unique visuals
            that capture a brand’s identity. Every project is an opportunity to
            enhance usability and bring a client’s vision to reality.
          </p>

          <Link
            passHref
            href="/portfolio"
            className="group mt-4 flex w-max flex-row items-center gap-2 hover:underline"
          >
            View My Recent Work
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="button-group flex">
          <Link
            href="/documents/Resume.pdf"
            target="_blank"
            passHref
            rel="noopener noreferrer"
          >
            <button className="mt-3 flex w-52 items-center justify-center gap-2 rounded-md bg-neutral-300 p-2 text-light-color transition duration-200 hover:bg-neutral-400 active:translate-y-1 dark:bg-slate-500 dark:text-dark-color hover:dark:bg-slate-600">
              <FileText />
              See My Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
