"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { House, Info, BriefcaseBusiness, Contact, X, Github, Linkedin, ArrowUpRight, FileText } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import { linksType } from "@/types";

const links: linksType[] = [
  { href: "/", name: "Home", icon: House },
  { href: "/about", name: "About", icon: Info },
  { href: "/portfolio", name: "Portfolio", icon: BriefcaseBusiness },
  { href: "/contact", name: "Contact", icon: Contact },
  { href: "https://github.com/MarcAnthony-WebDev", name: "Github", icon: Github, externalLink: true },
  { href: "https://www.linkedin.com/in/marcanthony-tumminello/", name: "LinkedIn", icon: Linkedin, externalLink: true },
  { href: "/documents/Resume.pdf", name: "Resume", icon: FileText, externalLink: true },
];

interface NavLinksProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const NavLinks = ({ isOpen, closeMenu }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <ul
      className={`fixed right-0 top-0 z-10 flex h-screen w-full xs:w-[300px] flex-col items-stretch gap-4 bg-neutral-100 dark:bg-slate-800 md:static md:h-auto md:w-full md:flex-col md:bg-transparent md:dark:bg-transparent md:z-0 md:flex-col md:items-start md:gap-6 py-6 px-2 md:p-0`}
    >
      {isOpen && (
        <li className={`self-end pr-5 md:hidden`}>
          <button onClick={closeMenu}>
            <X size={32} className="text-light-color dark:text-dark-color" />
          </button>
        </li>
      )}
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name} className="w-full">
            <Link
              onClick={closeMenu}
              target={link.externalLink ? "_blank" : undefined}
              rel={link.externalLink ? "noopener noreferrer" : undefined}
              href={link.href}
              scroll={true}
              className={clsx(
                "text-md flex items-start gap-4 rounded-md p-2 font-medium text-light-color transition duration-200 hover:bg-light-bg-hover dark:text-dark-color dark:hover:bg-dark-bg-hover",
                {
                  "bg-neutral-200 dark:bg-slate-600": pathname === link.href,
                },
                "w-full",
              )}
            >
              <div className="flex w-full">
                <div className="flex gap-2">
                  {LinkIcon && (
                    <LinkIcon
                      className="text-light-color dark:text-dark-color"
                      size={20}
                    />
                  )}
                  <p className="flex-1 text-center md:text-left">{link.name}</p>
                </div>
                <div className="ml-auto ">
                  {link.externalLink ? <ArrowUpRight className="ml-auto" size={18} /> : null}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
      <li className="md:self-start md:w-1/2 w-1/4 h-[15px]">
        <ThemeToggler styles="p-2 md:mt-[-10px]" size={24} />
      </li>
    </ul >
  );
};

export default NavLinks;
