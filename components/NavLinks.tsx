"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { House, Info, BriefcaseBusiness, Contact, X } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import { linksType } from "@/types";

const links: linksType[] = [
  { href: "/", name: "Home", icon: House },
  { href: "/about", name: "About", icon: Info },
  { href: "/portfolio", name: "Portfolio", icon: BriefcaseBusiness },
  { href: "/contact", name: "Contact", icon: Contact },
];

type NavLinks = {
  isOpen: boolean;
};

const NavLinks = ({ isOpen, closeMenu }) => {
  const pathname = usePathname();

  return (
    <ul
      className={`fixed right-0 top-0 z-10 flex h-screen w-[300px] flex-col items-stretch gap-4 bg-neutral-100 p-6 dark:bg-slate-800 sm:static sm:h-auto sm:w-full sm:flex-row sm:bg-transparent sm:dark:bg-transparent md:z-0 md:flex-col md:items-start md:gap-10`}
    >
      {isOpen && (
        <li className={`self-end pr-5 sm:hidden`}>
          <button onClick={closeMenu}>
            <X className="text-light-color dark:text-dark-color" />
          </button>
        </li>
      )}
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name} className="w-full">
            <Link
              onClick={closeMenu}
              href={link.href}
              scroll={true}
              className={clsx(
                "flex items-center gap-2 rounded-md p-2 text-sm font-medium text-light-color transition duration-200 hover:bg-light-bg-hover dark:text-dark-color dark:hover:bg-dark-bg-hover",
                {
                  "bg-neutral-200 dark:bg-slate-600": pathname === link.href,
                },
                "w-full",
              )}
            >
              {LinkIcon && (
                <LinkIcon
                  className="text-light-color dark:text-dark-color"
                  size={18}
                />
              )}
              <p className="flex-1 text-center md:text-left">{link.name}</p>
            </Link>
          </li>
        );
      })}
      <li>
        <ThemeToggler />
      </li>
    </ul>
  );
};

export default NavLinks;
