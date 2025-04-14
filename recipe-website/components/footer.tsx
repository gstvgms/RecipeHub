export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1a1a1a] py-12 border-t border-gray-200 dark:border-[#333]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-medium text-[#2d3436] dark:text-white mb-4">Inscreva-se na nossa newsletter!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Receba receitas, dicas e muito mais.</p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="flex-grow bg-gray-100 dark:bg-[#333] text-[#2d3436] dark:text-white rounded-l px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff8c00]"
          />
          <button className="bg-[#ff8c00] text-white px-4 py-2 rounded-r font-medium">Inscrever</button>
        </div>
      </div>
    </footer>
  )
}
