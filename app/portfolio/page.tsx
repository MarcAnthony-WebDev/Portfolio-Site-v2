
import React from "react";

import { GalleryCard, FeaturedCard } from "@/components";
import { portfolioData, portfolioFeature } from "./portfolioData";

const page = () => {
  return (
    <div className="main-color-styles h-full w-full flex flex-col gap-10">
      {/* Page Heading */}
      <div className="heading-container flex w-full flex-col items-center justify-center gap-4 p-4">
        <h2 className="page-heading text-center">Portfolio Highlights</h2>
        <p className="text-center text-lg text-light-color dark:text-dark-color max-w-3xl">
          Explore a curated selection of web projects I’ve built — ranging from marketing sites and
          business tools to interactive apps and fully responsive designs.
        </p>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-gallery-container flex flex-col w-full items-center gap-16 justify-center px-4 md:px-10">

        {/* Featured Project */}
        <section className="featured-project-section w-full flex justify-center items-center gap-10">
          <div className="w-full">
            {portfolioFeature.map((project) => (
              <FeaturedCard
                key={project.id}
                id={project.id}
                src={project.src}
                alt={project.alt}
                title={project.title}
                description={project.description}
                href={project.href}
              />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full border-t border-neutral-300 dark:border-neutral-700"></div>

        {/* Other Projects Section Heading */}
        <section className="w-full flex flex-col gap-6 items-center text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-light-color dark:text-dark-color">
            More Projects
          </h3>
          <p className="max-w-2xl text-lg text-neutral-700 dark:text-neutral-300">
            A collection of additional websites and applications I’ve built for clients across
            different industries — from logistics and home services to education and e-commerce.
          </p>
        </section>

        {/* Gallery Cards */}
        <div className="portfolio-gallery grid h-full w-full grid-cols-[repeat(auto-fit,minmax(90vw,1fr))] place-items-center items-start justify-items-center gap-10 px-2 py-4 md:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] md:px-10">
          {portfolioData.map((project) => (
            <GalleryCard
              key={project.id}
              src={project.src}
              title={project.title}
              description={typeof project.description === "string" ? project.description : ""}
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
