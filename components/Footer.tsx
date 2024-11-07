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
    <footer className="col-[2/3] border-t-[1px] bg-light-bg dark:bg-dark-bg">
      <ul className="flex h-full items-end justify-center gap-2 py-4">
        {footerLinks.map((link) => {
          const LinkIcon = link.icon;
          return (
            <li key={link.name}>
              <button className="rounded-full p-2 hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {LinkIcon && (
                    <LinkIcon className="h-full w-full text-light-color transition duration-200 hover:rotate-3 dark:text-dark-color" />
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
