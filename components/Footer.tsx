'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { Github, Linkedin, House } from "lucide-react";
import Link from "next/link";
import { Dock } from '@/components'

// import { linksType } from "@/types";

// old footer links
// const footerLinks: linksType[] = [
//   {
//     href: "https://github.com/MarcAnthony-WebDev",
//     icon: Github,
//     name: "Github",
//   },
//   {
//     href: "https://www.linkedin.com/in/marcanthony-tumminello/",
//     icon: Linkedin,
//     name: "Linkedin",
//   },
// ];


const Footer = () => {
  const router = useRouter();

  const dockItems = [
    {
      icon: <House size={18} className="text-light-color dark:text-dark-color" />,
      label: 'Home',
      onClick: () => router.push("/"),
    },
    {
      icon: <Github size={18} className="text-light-color dark:text-dark-color" />,
      label: 'Github',
      onClick: () => window.open(
        'https://github.com/Marcanthony-WebDev',
        "_blank"
      ),
    },
    {
      icon: <Linkedin size={18} className="text-light-color dark:text-dark-color" />,
      label: 'Linkedin',
      onClick: () => window.open(
        'https://www.linkedin.com/in/marcanthony-tumminello',
        "_blank"
      ),
    },
  ]

  return (
    <footer className="col-[2/3] border-t-[1px] border-t-neutral-300 dark:border-t-neutral-500 bg-light-bg dark:bg-dark-bg relative">

      <div className="flex items-center justify-center py-4 h-[70px]">
        <Dock items={dockItems}
          panelHeight={50}
          baseItemSize={30}
          magnification={50}
        />
      </div>

      {/* <ul className="flex h-full items-end justify-center gap-2 py-4"> */}
      {/* {footerLinks.map((link) => { */}
      {/*   const LinkIcon = link.icon; */}
      {/*   return ( */}
      {/*     <li key={link.name}> */}
      {/*       <button className="rounded-full p-2 hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover"> */}
      {/*         <Link */}
      {/*           href={link.href} */}
      {/*           target="_blank" */}
      {/*           rel="noopener noreferrer" */}
      {/*         > */}
      {/*           {LinkIcon && ( */}
      {/*             <LinkIcon className="h-full w-full text-light-color transition duration-200 hover:rotate-3 dark:text-dark-color" /> */}
      {/*           )} */}
      {/*         </Link> */}
      {/*       </button> */}
      {/*     </li> */}
      {/*   ); */}
      {/* })} */}
      {/* </ul> */}
    </footer>
  );
};

export default Footer;
