
'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Logos from "@/components/Logos";
import CustomButton from '@/components/CustomButton';

import {
  Smartphone,
  LayoutDashboard,
  Layers3,
  Contact2,
  Menu,
  TextCursorInput,
  Image as ImageIcon,
  Eye,
} from "lucide-react";

type DescriptionBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "list"; content: string[] };

type FeaturedCardProps = {
  id: number;
  src: string;
  title: string;
  description: string | DescriptionBlock[];
  href: string;
  alt?: string;
};

const FeaturedCard = ({ id, src, title, description, href, alt }: FeaturedCardProps) => {
  const isRich = Array.isArray(description);

  const mainContent = isRich
    ? description.filter((block) => block.type === "paragraph")
    : [{ type: "paragraph", content: description }] as DescriptionBlock[];

  const extendedContent = isRich
    ? description.filter((block) => block.type === "heading" || block.type === "list")
    : [];

  const getLogoIcon = (label: string) => {
    const match = Logos.find((entry) =>
      label.toLowerCase().includes(entry.label.toLowerCase())
    );
    return match?.icon || null;
  };

  const getLucideIcon = (label: string) => {
    const iconMap: Record<string, any> = {
      "Hero": LayoutDashboard,
      "Animated": Layers3,
      "modal": ImageIcon,
      "contact": Contact2,
      "Responsive": Smartphone,
      "hamburger": Menu,
      "marketing": TextCursorInput,
      "motion": Eye,
    };

    const match = Object.keys(iconMap).find((key) =>
      label.toLowerCase().includes(key.toLowerCase())
    );

    return iconMap[match || ""] || Eye;
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col gap-10"
    >
      {/* Top Row: Image + Intro */}
      <div className="flex w-full flex-col md:flex-row items-start gap-6">
        <motion.div variants={fadeInUp} className="w-full md:w-1/2">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Image
              src={src}
              alt={alt || title}
              width={1200}
              height={675}
              className="w-full rounded-md shadow-md object-cover"
            />
          </Link>
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 px-2 md:px-4">
          <motion.span
            variants={fadeInUp}
            className="inline-block w-fit rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-black dark:bg-yellow-300"
          >
            ⭐ Featured Project
          </motion.span>

          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-light-color dark:text-dark-color"
          >
            {title}
          </motion.h3>

          {mainContent.map((block, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="text-base leading-relaxed text-neutral-800 dark:text-neutral-300"
            >
              {block.content}
            </motion.p>
          ))}

          <motion.div variants={fadeInUp}>
            <CustomButton text="Visit Website" href={href} target="_blank" />
          </motion.div>
        </div>
      </div>

      {/* Bottom: Tech Stack + Key Features */}
      <div className="flex flex-col md:flex-row gap-8 px-2 md:px-4">
        {/* Tech Stack Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          {extendedContent.map((block, index) => {
            if (
              block.type === "heading" &&
              block.content.includes("Tech Stack Highlights")
            ) {
              return (
                <motion.h4
                  key={`tech-heading-${index}`}
                  variants={fadeInUp}
                  className="text-lg font-semibold text-neutral-900 dark:text-white"
                >
                  {block.content}
                </motion.h4>
              );
            }
            if (
              block.type === "list" &&
              extendedContent[index - 1]?.type === "heading" &&
              extendedContent[index - 1].content.includes("Tech Stack Highlights")
            ) {
              return (
                <motion.ul
                  key={`tech-list-${index}`}
                  variants={fadeInUp}
                  className="space-y-2 text-base text-neutral-800 dark:text-neutral-300"
                >
                  {block.content.map((item) => {
                    const Icon = getLogoIcon(item);
                    return (
                      <li key={item} className="flex items-start gap-2">
                        {Icon && (
                          <span className="mt-1 h-4 w-4 shrink-0">
                            {React.cloneElement(Icon as React.ReactElement, {
                              className: "h-4 w-4 object-contain",
                            })}
                          </span>
                        )}
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </motion.ul>
              );
            }
            return null;
          })}
        </div>

        {/* Key Features Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          {extendedContent.map((block, index) => {
            if (
              block.type === "heading" &&
              block.content.includes("Key Features")
            ) {
              return (
                <motion.h4
                  key={`features-heading-${index}`}
                  variants={fadeInUp}
                  className="text-lg font-semibold text-neutral-900 dark:text-white"
                >
                  {block.content}
                </motion.h4>
              );
            }
            if (
              block.type === "list" &&
              extendedContent[index - 1]?.type === "heading" &&
              extendedContent[index - 1].content.includes("Key Features")
            ) {
              return (
                <motion.ul
                  key={`features-list-${index}`}
                  variants={fadeInUp}
                  className="space-y-2 text-base text-neutral-800 dark:text-neutral-300"
                >
                  {block.content.map((item) => {
                    const Icon = getLucideIcon(item);
                    return (
                      <li key={item} className="flex items-start gap-2">
                        <Icon className="mt-1 h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </motion.ul>
              );
            }
            return null;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
