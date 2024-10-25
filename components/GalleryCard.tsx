import React from "react";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type GalleryCardType = {
  src: string;
  title: string;
  description: string;
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
  fromColor = "from-green-900",
  viaColor = "via-green-500",
  toColor = "to-green-50",
}: GalleryCardType) => {
  return (
    <div className="flex h-full max-w-[900px] flex-col items-center gap-2">
      <div className="gallery-card group relative h-[300px] w-[90vw] rounded-sm from-blue-300 to-blue-800 sm:w-[600px]">
        <Image
          src={src}
          alt="Cipco Fence Image"
          fill
          sizes="(max-width:768px) 400px"
          style={{
            objectFit: "cover",
            overflow: "hidden",
            borderRadius: "20px",
            boxShadow: "0 0 5px rgba(0,0,0,.2)",
          }}
        />
        {/*background-gradient*/}
        <div
          className={clsx(
            "absolute inset-0 cursor-pointer rounded-[20px] bg-gradient-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-60",
            fromColor,
            viaColor,
            toColor,
          )}
        ></div>
        {/*Hover Buttons*/}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href={href || "/"}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-52 self-center rounded-3xl bg-slate-600 p-2 text-white transition duration-200 hover:bg-slate-500 active:translate-y-1">
              Visit Website
            </button>
          </Link>
          {/* <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700">
            View Code
          </button> */}
        </div>
      </div>
      <div className="content-box flex flex-col items-center gap-2 px-10">
        <Link
          href={href || "/"}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold transition duration-150 hover:underline"
        >
          {title}
        </Link>
        {/* <h3 className="text-2xl font-bold">{title}</h3> */}
        <p className="text-lg">{description}</p>
      </div>
      <div className="button-container mt-auto">
        <button className="w-52 self-center rounded-3xl bg-slate-600 p-2 text-white transition duration-200 hover:bg-slate-500 active:translate-y-1">
          Visit Website
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
