"use client";

import React from "react";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="nav-container relative col-span-1 row-span-2 h-full bg-light-bg outline outline-1 outline-neutral-200 dark:bg-gray-900 dark:outline-neutral-700 md:min-h-full">
      <aside className="top-0 flex h-max p-4 md:fixed md:p-5">
        <nav className="nav flex w-full items-center justify-between md:h-full md:flex-col md:items-start md:gap-10">
          <div className="image-container h-24 w-24 md:h-40 md:w-40">
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
