import Link from "next/link"

export default function Receitas() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#2d3436] dark:text-white mb-8">Receitas Mais Populares</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white dark:bg-[#1a1a1a] rounded overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-[#ff8c00] text-white text-xs px-2 py-1 rounded-full">
                Popular
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-medium text-[#ff8c00] mb-2">{recipe.title}</h2>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill={i < recipe.rating ? "currentColor" : "none"}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-xs ml-2">({recipe.reviews} avaliações)</span>
              </div>
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

const popularRecipes = [
  {
    id: 1,
    title: "Pizza Margherita",
    description: "A clássica pizza italiana com molho de tomate, mussarela fresca e manjericão.",
    image: "/pizzaMargh.jpg?height=400&width=600&text=Pizza+Margherita",
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    title: "Bolo de Chocolate",
    description: "Bolo de chocolate fofinho com cobertura de ganache e raspas de chocolate.",
    image: "/cake.jpg?height=400&width=600&text=Bolo+de+Chocolate",
    rating: 5,
    reviews: 96,
  },
  {
    id: 3,
    title: "Carbonara",
    description: "Massa com molho cremoso de ovos, queijo parmesão e pancetta.",
    image: "/carbonara.jpg?height=400&width=600&text=Carbonara",
    rating: 4,
    reviews: 87,
  },
  {
    id: 4,
    title: "Smoothie de Morango",
    description: "Smoothie refrescante de morango com iogurte e mel.",
    image: "/smoothie.jpg?height=400&width=600&text=Smoothie+de+Morango",
    rating: 5,
    reviews: 74,
  },
  {
    id: 5,
    title: "Pizza Vegetariana",
    description: "Pizza com legumes grelhados, queijo de cabra e molho pesto.",
    image: "/veggiePizza.jpg?height=400&width=600&text=Pizza+Vegetariana",
    rating: 4,
    reviews: 65,
  },
  {
    id: 6,
    title: "Tikka Masala",
    description: "Frango marinado em especiarias e iogurte, cozido em molho de tomate e creme.",
    image: "/Tikka.jpg?height=400&width=600&text=Tikka+Masala",
    rating: 5,
    reviews: 59,
  },
]
