export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white">
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">Новая коллекция 2025</h2>
                <p className="text-xl opacity-90 mb-8">Скидка на все до 50%</p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                    Смотреть каталог
                </button>
            </div>
        </section>
    )
}