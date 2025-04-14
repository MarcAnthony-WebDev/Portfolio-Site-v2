'use client'

import React from "react";

// import Image from "next/image";
import Link from "next/link";
// import clsx from "clsx";
import { TiltedCard } from '@/components'
import LinkButton from "@/components/LinkButton";

type GalleryCardType = {
  src: string;
  title: string;
  description: string;
  alt: string;
  href: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
};

const GalleryCard = ({
  src,
  title,
  href,
  description,
  alt,
  fromColor = "from-green-900",
  viaColor = "via-green-500",
  toColor = "to-green-50",
}: GalleryCardType) => {
  return (
    <div className="flex h-full max-w-[900px] flex-col items-center gap-4">
      <div className="gallery-card group relative aspect-video w-[90vw] rounded-sm sm:w-[600px]">
        <TiltedCard
          imageSrc={src}
          containerWidth='100%'
          imageWidth='100%'
          containerHeight='100%'
          imageHeight='100%'
          altText={alt}
          showTooltip={false}
          displayOverlayContent={false}
          showMobileWarning={false}
          overlayContent={
            <p className="text-xl dark:text-dark-color z-10 text-center dark:bg-dark-bg bg-light-bg bg-opacity-65 rounded-lg p-2">
              {title}
            </p>
          }
        />
      </div>
      <div className="content-box flex flex-col items-center gap-4 px-4 sm:px-10">
        <Link
          href={href || "/"}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-poppins font-medium transition duration-150 hover:underline"
        >
          {title}
        </Link>
        {/* <h3 className="text-2xl font-bold">{title}</h3> */}
        <p className="text-xl">{description}</p>
        <div className="button-container mt-auto">
          <LinkButton text='Visit Website' href={href} target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
