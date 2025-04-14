import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="fixed top-0 left-0 right-0 bg-[#1a1a1a] z-10 border-b border-[#333]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-medium text-[#ff8c00]">
            RecipeHub
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-[#ff8c00] transition-colors">
              Home
            </Link>
            <Link href="/recetas" className="text-white hover:text-[#ff8c00] transition-colors">
              Recetas
            </Link>
            <Link href="/sobre" className="text-white hover:text-[#ff8c00] transition-colors">
              Sobre
            </Link>
            <Link href="/contatos" className="text-white hover:text-[#ff8c00] transition-colors">
              Contatos
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="bg-[#333] text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
              />
            </div>
            <button className="bg-[#ff8c00] text-white px-3 py-1 rounded text-sm font-medium">Pesquisar</button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-[#1a1a1a] rounded overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium text-[#ff8c00] mb-2">{recipe.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{recipe.description}</p>
                <Link
                  href={`/recipe/${recipe.id}`}
                  className="block w-full bg-[#ff8c00] hover:bg-[#e67e00] text-white text-center py-2 rounded transition-colors"
                >
                  Ver Receita
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-[#1a1a1a] py-12 border-t border-[#333]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-medium text-white mb-4">Inscreva-se na nossa newsletter!</h2>
          <p className="text-gray-400 mb-6">Receba receitas, dicas e muito mais.</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-grow bg-[#333] text-white rounded-l px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
            />
            <button className="bg-[#ff8c00] text-white px-4 py-2 rounded-r font-medium">Inscrever</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

const recipes = [
  {
    id: 1,
    title: "Pizza Margherita",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=400&width=600&text=Pizza+Margherita",
  },
  {
    id: 2,
    title: "Sopa de Cogumelos",
    description: "Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/placeholder.svg?height=400&width=600&text=Sopa+de+Cogumelos",
  },
  {
    id: 3,
    title: "Refogado de Legumes",
    description: "Duis aute irure dolor in reprehenderit in voluptate.",
    image: "/placeholder.svg?height=400&width=600&text=Refogado+de+Legumes",
  },
  {
    id: 4,
    title: "Bolo de Chocolate",
    description: "Excepteur sint occaecat cupidatat non proident.",
    image: "/placeholder.svg?height=400&width=600&text=Bolo+de+Chocolate",
  },
  {
    id: 5,
    title: "Pizza de Pepperoni",
    description: "Sed ut perspiciatis unde omnis iste natus error sit.",
    image: "/placeholder.svg?height=400&width=600&text=Pizza+de+Pepperoni",
  },
  {
    id: 6,
    title: "Refogado de Vegetais",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    image: "/placeholder.svg?height=400&width=600&text=Refogado+de+Vegetais",
  },
  {
    id: 7,
    title: "Bolo de Morango",
    description: "Accusantium doloremque laudantium, totam rem aperiam.",
    image: "/placeholder.svg?height=400&width=600&text=Bolo+de+Morango",
  },
  {
    id: 8,
    title: "Salada de Abacate",
    description: "Itaque ipsa quae ab illo inventore veritatis.",
    image: "/placeholder.svg?height=400&width=600&text=Salada+de+Abacate",
  },
  {
    id: 9,
    title: "Panquecas Fofas",
    description: "Inventore veritatis et quasi architecto beatae vitae dicta.",
    image: "/placeholder.svg?height=400&width=600&text=Panquecas+Fofas",
  },
]
