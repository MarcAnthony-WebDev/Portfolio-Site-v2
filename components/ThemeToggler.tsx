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
      <label className={`relative w-full inline-block h-full dark:bg-slate-900 bg-neutral-300 rounded-full border border-solid border-neutral-500 py-[12px] ${styles}`}>
        <input className="opacity-0 w-0 h-0 toggle-button__input" type="checkbox" onChange={() => setTheme(theme === "light" ? "dark" : "light")} checked={theme === 'dark'} />
        <div className='cursor-pointer toggle-button__div absolute inset-0 rounded-lg transition-transform duration-300 w-2/3 h-full'
          style={{ transform: theme === "dark" ? "translateX(calc(50% + 1px))" : "translateX(calc(0% - 1px))" }}
        >
          <div className="absolute border border-solid border-neutral-500 dark:border-neutral-400 left-[0px] top-[0px] h-full w-full rounded-full bg-neutral-100 dark:bg-neutral-500 flex items-center justify-center transition-transform duration-300">
            {theme === 'dark' ? (
              <Moon size={size} className="text-neutral-100" />
            ) : (
              <Sun size={size} className="text-neutral-900" />
            )}
          </div>
        </div>
      </label>
    </>
  );
};

export default ThemeToggler;
