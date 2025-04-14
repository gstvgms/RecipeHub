"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="w-9 h-9 flex items-center justify-center rounded-md border border-[#333]">
        <span className="sr-only">Toggle theme</span>
        <Sun className="h-5 w-5 text-white" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-md border border-[#333] dark:border-[#333] hover:bg-[#333] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-[#121212]" />}
    </button>
  )
}
