"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="duration-300focus:outline-none hover:bg-light-bg-hover hover:dark:bg-dark-bg-hover flex h-8 w-8 items-center justify-center rounded-full transition-all"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-neutral-900" />
      ) : (
        <Sun className="h-5 w-5 text-neutral-100" />
      )}
    </button>
  );
};

export default ThemeToggler;
