"use client";
import { useState, useEffect, createContext, useContext, ReactNode } from "react";

type ThemeContextType = { theme: "dark" | "light"; toggle: () => void };

const ThemeCtx = createContext<ThemeContextType | null>(null);

function readStoredTheme(): "dark" | "light" {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">(readStoredTheme);

  function toggle() {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("theme-light", next === "light");
      try { localStorage.setItem("theme", next); } catch { /* ignore */ }
      return next;
    });
  }

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
