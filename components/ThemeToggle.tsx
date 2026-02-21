"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
