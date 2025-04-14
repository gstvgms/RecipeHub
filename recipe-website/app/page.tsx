import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white dark:bg-[#1a1a1a] rounded overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-medium text-[#ff8c00] mb-2">{recipe.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{recipe.description}</p>
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
    </div>
  )
}

const recipes = [
  {
    id: 1,
    title: "Pizza Margherita",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/pizzaMargh.jpg",
  },
  {
    id: 2,
    title: "Sopa de Cogumelos",
    description: "Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/soupMush.jpg",
  },
  {
    id: 3,
    title: "Refogado de Legumes",
    description: "Duis aute irure dolor in reprehenderit in voluptate.",
    image: "/refogadoLegume.jpg",
  },
  {
    id: 4,
    title: "Bolo de Chocolate",
    description: "Excepteur sint occaecat cupidatat non proident.",
    image: "/cake.jpg",
  },
  {
    id: 5,
    title: "Pizza de Pepperoni",
    description: "Sed ut perspiciatis unde omnis iste natus error sit.",
    image: "/pepperoni.jpg",
  },
  {
    id: 6,
    title: "Refogado de Vegetais",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    image: "/refogado.jpg",
  },
  {
    id: 7,
    title: "Bolo de Morango",
    description: "Accusantium doloremque laudantium, totam rem aperiam.",
    image: "/strawberry.jpg",
  },
  {
    id: 8,
    title: "Salada de Abacate",
    description: "Itaque ipsa quae ab illo inventore veritatis.",
    image: "/avocado.jpg",
  },
  {
    id: 9,
    title: "Panquecas Fofas",
    description: "Inventore veritatis et quasi architecto beatae vitae dicta.",
    image: "/pancake.jpg",
  },
]
