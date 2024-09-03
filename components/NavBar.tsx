import React from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="nav-container relative col-span-1 row-span-2 h-full bg-light-bg outline outline-1 outline-neutral-200 dark:bg-gray-900 dark:outline-neutral-700 md:min-h-full">
      <aside className="top-0 flex h-max p-4 md:fixed md:p-5">
        <nav className="nav flex w-full items-center justify-between md:h-full md:flex-col md:items-start md:gap-10">
          <div className="image-container">
            <div className="img h-20 w-20 rounded-full bg-blue-700"></div>
          </div>
          <NavLinks />
        </nav>
      </aside>
    </div>
  );
};

export default NavBar;
