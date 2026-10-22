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
                                ? 'bg-black text-white'
                                : 'bg-gray-50 text-gray-500 hover:text-gray-900'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </section>
    )
}