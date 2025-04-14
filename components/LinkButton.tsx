
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type LinkButtonProps = {
  text: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const LinkButton = ({ text, href, target = "_self" }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      className="mt-3 w-52 self-center rounded-3xl bg-neutral-300 p-2 text-center text-light-color transition duration-200 hover:bg-neutral-400 active:translate-y-1 dark:bg-slate-600 dark:text-dark-color dark:hover:bg-slate-500 flex items-center justify-center gap-2"
    >
      {text}
      <ArrowUpRight size={18} className="inline-block" />
    </Link>
  );
};

export default LinkButton;
