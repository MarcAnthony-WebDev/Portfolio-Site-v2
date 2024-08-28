import React from "react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { linksType } from "@/types";

const footerLinks: linksType[] = [
  {
    href: "https://github.com/MarcAnthony-WebDev",
    icon: Github,
    name: "Github",
  },
  {
    href: "https://www.linkedin.com/in/marcanthony-tumminello/",
    icon: Linkedin,
    name: "Linkedin",
  },
];

const Footer = () => {
  return (
    <footer className="bg-light-bg col-[2/3] dark:bg-gray-950">
      <ul className="flex h-full items-end justify-center gap-2 py-4">
        {footerLinks.map((link) => {
          const LinkIcon = link.icon;
          return (
            <li key={link.name}>
              <button className="hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover rounded-full p-2">
                <Link href={link.href}>
                  {LinkIcon && (
                    <LinkIcon className="h-full w-full transition duration-200 hover:rotate-3" />
                  )}
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
