export default function ProductCard({ product, onAdd }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
            <div className="relative overflow-hidden h-64">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium">
                    {product.category}
                </span>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-500">w</span>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">
                        {product.price.toLocaleString('ru-Ru')} R
                    </span>
                    <button
                        onClick={() => onAdd(product)}
                        className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-xl transition-colors"
                        title="В корзину"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}