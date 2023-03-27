import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import MoonIcon from "./svgs/moonIcon";
import SunIcon from "./svgs/sunIcon";

export default function TogleDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="flex md:justify-end items-center ">
        {currentTheme === "dark" ? (
          <button
            onClick={() => setTheme("light")}
            className="flex items-center px-0 hover:bg-secondary rounded-md "
          >
            <span className="text-xs px-1 md:pt-1 text-secondary dark:text-light">
              mode
            </span>
            <span className="shadow-sm shadow-slate-600 rounded-md border-primary border-2 md:shadow-none">
              <MoonIcon className="animate-fly invert" />
            </span>
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="flex items-center px-0 hover:bg-gray-300 rounded-md"
          >
            <span className="text-xs px-1 md:pt-1 text-secondary dark:text-light">
              mode
            </span>
            <span className="text-secondary shadow-sm shadow-slate-600 rounded-md border-primary border-2  md:shadow-none">
              <SunIcon />
            </span>
          </button>
        )}
      </div>
    </>
  );
}
