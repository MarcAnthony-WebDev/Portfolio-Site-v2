import React from "react";

import { GalleryCard } from "@/components";
import { portfolioData, PortfolioItem } from "./portfolioData";

const page = () => {
  return (
    <div className="main-color-styles h-full w-full">
      <div className="heading-container flex w-full flex-col items-center justify-center gap-4 p-4">
        <h2 className="heading text-center text-6xl font-bold">
          My Recent Work
        </h2>
        <p className="text-center">Below you can view all of my recent work.</p>
      </div>

      <div className="portfolio-gallery-container flex w-full items-center justify-center">
        <div className="portfolio-gallery grid h-full w-full grid-cols-[repeat(auto-fit,minmax(90vw,1fr))] place-items-center items-start justify-items-center gap-10 px-2 py-4 md:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] md:px-10">
          {portfolioData.map((project) => (
            <GalleryCard
              key={project.id}
              src={project.src}
              title={project.title}
              description={project.description}
              href={project.href}
              fromColor={project.fromColor}
              viaColor={project.viaColor}
              toColor={project.toColor}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
