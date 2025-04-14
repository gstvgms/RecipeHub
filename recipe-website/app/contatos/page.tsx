import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Contatos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#2d3436] dark:text-white mb-8">Entre em Contato</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-medium text-[#ff8c00] mb-6">Envie uma Mensagem</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-[#333] bg-white dark:bg-[#252525] text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-[#333] bg-white dark:bg-[#252525] text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-1">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-[#333] bg-white dark:bg-[#252525] text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-[#333] bg-white dark:bg-[#252525] text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
                placeholder="Sua mensagem aqui..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff8c00] hover:bg-[#e67e00] text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div>
          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-medium text-[#ff8c00] mb-6">Informações de Contato</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#ff8c00] mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">contato@recipehub.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#ff8c00] mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Telefone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+55 (41) 3314-5850</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#ff8c00] mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Endereço</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Calixto Razolini, 215
                    <br />
                    Curitiba, PR
                    <br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-medium text-[#ff8c00] mb-6">Redes Sociais</h2>

            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
              >
                <Instagram className="w-5 h-5 mr-3" />
                <span>@recipehub</span>
              </a>

              <a
                href="#"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
              >
                <Facebook className="w-5 h-5 mr-3" />
                <span>RecipeHub Oficial</span>
              </a>

              <a
                href="#"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
              >
                <Twitter className="w-5 h-5 mr-3" />
                <span>@recipehub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-medium text-[#ff8c00] mb-6">Perguntas Frequentes</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Como posso contribuir com uma receita?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Você pode enviar sua receita através do formulário de contato ou diretamente para o email
              contato@recipehub.com com fotos e instruções detalhadas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Vocês oferecem cursos de culinária?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Infelizmente ainda não! Mas fique de olho em nossas redes sociais para informações
              sobre possíveis cursos a serem lançados..
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Posso republicar receitas do RecipeHub?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Nossas receitas são protegidas por direitos autorais. Entre em contato conosco para solicitar permissão
              para uso em outros meios.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
