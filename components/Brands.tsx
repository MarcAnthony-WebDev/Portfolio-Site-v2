import React from "react";

import { Logos } from "@/components"

const Brands = () => {
  return (
    <>
      <div className="h-10 brands-container w-52 xs:w-[350px] md:w-[500px]">
        <div className="brands-wrapper">
          {Logos.concat(Logos).map((logo, index) =>(
            <div key={index} className="flex items-center gap-2">
              {logo.icon}
              <span className="text-sm">{logo.label}</span>
            </div>
          ) )}
        </div>
      </div>
    </>
  );
};

export default Brands;
