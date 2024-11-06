"use client";

import React, { useEffect, useState, useRef } from "react";

import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1000) {
        setIsFixed(window.scrollY > 100);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="nav-container relative col-span-1 row-span-2 h-full bg-light-bg outline outline-1 outline-neutral-200 dark:bg-dark-bg dark:outline-neutral-700 md:min-h-full">
      <div className={`${isFixed ? "h-48" : "h-0"}`}></div>
      <aside
        className={`md:p-5" top-0 flex h-max p-2 transition duration-200 md:fixed ${isFixed ? "fixed left-0 right-0 top-0 z-10 w-full bg-neutral-100 shadow-md dark:bg-slate-700" : "relative"}`}
      >
        <nav className="nav flex w-full items-center justify-between md:h-full md:flex-col md:items-start md:gap-10">
          <div className="image-container h-20 w-20 md:h-40 md:w-40">
            <Link href="/" passHref className="h-full w-full">
              <Image
                src="/images/cropped-headshot.png"
                alt="headshot photo of me, Marcanthony!"
                width={1080}
                height={1080}
                className="img h-full w-full rounded-full shadow-sm"
              />
            </Link>
          </div>
          <button
            className={`sm:hidden ${isOpen ? "hidden" : "block"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="text-light-color dark:text-dark-color" />
          </button>
          <div
            className={`nav-container ${isOpen ? "block" : "hidden"} sm:block`}
          >
            <NavLinks isOpen={isOpen} closeMenu={closeMenu} />
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default NavBar;
