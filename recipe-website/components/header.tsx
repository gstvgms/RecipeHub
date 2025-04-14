import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#1a1a1a] z-10 border-b border-gray-200 dark:border-[#333]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-medium text-[#ff8c00]">
          RecipeHub
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-[#2d3436] dark:text-white hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/receitas"
            className="text-[#2d3436] dark:text-white hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
          >
            Receitas
          </Link>
          <Link
            href="/sobre"
            className="text-[#2d3436] dark:text-white hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/contatos"
            className="text-[#2d3436] dark:text-white hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
          >
            Contatos
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="bg-gray-100 dark:bg-[#333] text-[#2d3436] dark:text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
            />
          </div>
          <button className="bg-[#ff8c00] text-white px-3 py-1 rounded text-sm font-medium">Pesquisar</button>
          <ThemeToggle />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
