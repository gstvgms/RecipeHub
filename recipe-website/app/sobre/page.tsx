export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#2d3436] dark:text-white mb-8">Sobre o RecipeHub</h1>

      <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-6 mb-10">
        <h2 className="text-2xl font-medium text-[#ff8c00] mb-4">Nossa Missão</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          O RecipeHub nasceu da paixão pela culinária e do desejo de compartilhar receitas deliciosas com o mundo. Nossa
          missão é inspirar pessoas a cozinharem em casa, explorarem novos sabores e criarem memórias ao redor da mesa.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Acreditamos que a comida tem o poder de unir pessoas e culturas. Por isso, trabalhamos para oferecer receitas
          autênticas, fáceis de seguir e com ingredientes acessíveis para todos.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Fundado em 2025, o RecipeHub tem como objetivo ser o seu guia na cozinha, seja você um cozinheiro iniciante ou um chef experiente.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#2d3436] dark:text-white mb-6">Nossa Equipe</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {team.map((member) => (
          <div key={member.id} className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-square">
              <img src={member.photo || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-medium text-[#ff8c00]">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{member.role}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-medium text-[#ff8c00] mb-4">Nossos Valores</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <span className="font-medium">Qualidade</span> - Testamos todas as receitas antes de publicá-las
          </li>
          <li>
            <span className="font-medium">Acessibilidade</span> - Receitas com ingredientes fáceis de encontrar
          </li>
          <li>
            <span className="font-medium">Diversidade</span> - Celebramos culinárias de todo o mundo
          </li>
          <li>
            <span className="font-medium">Comunidade</span> - Valorizamos o feedback e as contribuições dos usuários
          </li>
          <li>
            <span className="font-medium">Sustentabilidade</span> - Promovemos práticas culinárias sustentáveis
          </li>
        </ul>
      </div>
    </div>
  )
}

const team = [
  {
    id: 1,
    name: "Gustavo Gomes",
    role: "Desenvolvedor",
    bio: "Gustavo é um dos criadores do RecipeHub e adora experimentar novas receitas. Ele é responsável pela parte técnica do site.",
    photo: "/gustavo.jpeg?height=400&width=400&text=Gustavo",
  },
  {
    id: 2,
    name: "Luigi Pontes",
    role: "Gerente de Infraestrutura",
    bio: "Apaixonado por tecnologia e comida, Luigi é responsável por toda a infraestrutura do site.",
    photo: "/luigi.jpg?height=400&width=400&text=Luigi",
  },
  {
    id: 3,
    name: "Álvaro Peringer",
    role: "Analista de Dados",
    bio: "Álvaro é o responsável por analisar as receitas e tendências do site, garantindo que os usuários tenham acesso ao melhor conteúdo.",
    photo: "/alvaro.png?height=400&width=400&text=Álvaro",
  },
  {
    id: 4,
    name: "Gabriel Bittencourt",
    role: "Segurança da Informação",
    bio: "Gabriel é o responsável por garantir a segurança dos dados dos usuários e do site.",
    photo: "/gabriel.png?height=400&width=400&text=Gabriel",
  },
]
