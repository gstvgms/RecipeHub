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
    description: "Uma clássica pizza italiana com molho de tomate fresco, mozzarella derretida e folhas de manjericão.",
    image: "/pizzaMargh.jpg",
  },
  {
    id: 2,
    title: "Sopa de Cogumelos",
    description: "Cremosa e reconfortante, perfeita para dias frios.",
    image: "/soupMush.jpg",
  },
  {
    id: 3,
    title: "Refogado de Legumes",
    description: "Uma mistura colorida de vegetais frescos salteados com temperos.",
    image: "/refogadoLegume.jpg",
  },
  {
    id: 4,
    title: "Bolo de Chocolate",
    description: "Um bolo rico e úmido, coberto com ganache de chocolate.",
    image: "/cake.jpg",
  },
  {
    id: 5,
    title: "Pizza de Pepperoni",
    description: "Crosta crocante com molho de tomate, queijo e fatias de pepperoni.",
    image: "/pepperoni.jpg",
  },
  {
    id: 6,
    title: "Refogado de Vegetais",
    description: "Uma combinação deliciosa de vegetais frescos salteados.",
    image: "/refogado.jpg",
  },
  {
    id: 7,
    title: "Bolo de Morango",
    description: "O preferido do Pica-Pau! Um bolo leve e fofo com morangos frescos.",
    image: "/strawberry.jpg",
  },
  {
    id: 8,
    title: "Salada de Abacate",
    description: "Uma salada refrescante com abacate, tomate e cebola roxa.",
    image: "/avocado.jpg",
  },
  {
    id: 9,
    title: "Panquecas Fofas",
    description: "Panquecas leves e fofas, perfeitas para o café da manhã.",
    image: "/pancake.jpg",
  },
]
