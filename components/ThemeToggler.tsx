"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type ThemeTogglerProps = {
  styles?: string;
  size?: number;
};

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ styles, size }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isToggled, setIsToggled] = useState(true);

  useEffect(() => setMounted(true), []);


  if (!mounted) return null;
  return (
    <>
      {/* <button */}
      {/*   className={`duration-300 focus:outline-none flex items-center justify-center rounded-full transition-all hover:bg-light-bg-hover hover:dark:bg-dark-bg-hover ${styles}`} */}
      {/*   onClick={() => setTheme(theme === "light" ? "dark" : "light")} */}
      {/*   aria-label="Toggle Dark Mode" */}
      {/* > */}
      {/*   {theme === "light" ? ( */}
      {/*     <Moon size={size} className="text-neutral-900" /> */}
      {/*   ) : ( */}
      {/*     <Sun size={size} className="text-neutral-100" /> */}
      {/*   )} */}
      {/* </button> */}
      <label className={`relative w-full inline-block h-full dark:bg-slate-900 bg-neutral-300 rounded-full border border-solid border-neutral-500 py-[12px] ${styles}`}>
        <input className="opacity-0 w-0 h-0 toggle-button__input" type="checkbox" onChange={() => setTheme(theme === "light" ? "dark" : "light")} checked={theme === 'dark'} />
        <div className='cursor-pointer toggle-button__div absolute inset-0 rounded-lg transition-transform duration-300 w-2/3 h-full'
          style={{ transform: theme === "dark" ? "translateX(calc(50% + 1px))" : "translateX(0)" }}
        >
          <div className="absolute left-[0px] top-[0px] h-full w-full rounded-full bg-neutral-500 flex items-center justify-center transition-transform duration-300">
            {theme === 'dark' ? (
              <Moon size={size} />
            ) : (
              <Sun size={size} />
            )}
          </div>
        </div>
      </label>
    </>
  );
};

export default ThemeToggler;
