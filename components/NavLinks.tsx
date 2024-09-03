"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { House, Info, BriefcaseBusiness, Contact } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import { linksType } from "@/types";

const links: linksType[] = [
  { href: "/", name: "Home", icon: House },
  { href: "/about", name: "About", icon: Info },
  { href: "/portfolio", name: "Portfolio", icon: BriefcaseBusiness },
  { href: "/contact", name: "Contact", icon: Contact },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-stretch gap-4 md:flex-col md:items-start md:gap-10">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name} className="w-full">
            <Link
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
