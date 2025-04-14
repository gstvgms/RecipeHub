"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="text-[#2d3436] dark:text-white" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-[#121212] z-50">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-[#2d3436] dark:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 mt-12">
            <Link
              href="/"
              className="text-xl text-[#2d3436] dark:text-white hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/receitas"
              className="text-xl text-[#2d3436] dark:text-white hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Receitas
            </Link>
            <Link
              href="/sobre"
              className="text-xl text-[#2d3436] dark:text-white hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/contatos"
              className="text-xl text-[#2d3436] dark:text-white hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contatos
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
