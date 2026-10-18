export default function Categories({ categories, active, onChange }) {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex gap-3 overflow-x-auto pb-2">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => onChange(cat)}
                        className={`px-6 py-2 rounded-xl whitespace-nowrap transition-all font-medium ${
                            active === cat
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </section>
    )
}