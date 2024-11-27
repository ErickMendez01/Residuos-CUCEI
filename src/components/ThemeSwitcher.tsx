"use client";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button onClick={() => setTheme("light")}>
        <FaSun />
      </button>
      <button onClick={() => setTheme("dark")}>
        <FaRegMoon />
      </button>
    </div>
  );
}
