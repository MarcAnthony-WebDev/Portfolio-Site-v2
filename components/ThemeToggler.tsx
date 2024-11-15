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
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className={`duration-300focus:outline-none flex items-center justify-center rounded-full transition-all hover:bg-light-bg-hover hover:dark:bg-dark-bg-hover ${styles}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <Moon size={size} className="text-neutral-900" />
      ) : (
        <Sun size={size} className="text-neutral-100" />
      )}
    </button>
  );
};

export default ThemeToggler;
