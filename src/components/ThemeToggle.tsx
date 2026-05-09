import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function getInitialTheme(): string {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [dark, setDark] = useState(() => getInitialTheme() === "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((prev) => !prev)}
      className="p-2 rounded-lg text-text-secondary hover:text-bright hover:bg-mid/10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-bright focus-visible:outline-offset-2"
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={dark ? "Modo claro" : "Modo oscuro"}
    >
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
