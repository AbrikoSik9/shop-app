export default function ProductCard({ product, onAdd}) {
    return (
        <div className="group">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <button
                    onClick={() => onAdd(product)}
                    className="absolute bottom-3 right-3 w-10 h-10 bg-white text-gray-900 rounded-full shadow-lg shadow-black/10 hover:bg-black hover:text-white transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
                    title="Добавить в корзину"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>

            <div className="px-1">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1.5">
                    {product.category}
                </p>
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-base leading-snug">{product.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
                        {product.rating}
                    </div>
                </div>
                <p className="text-lg font-semibold tracking-tight mt-1 text-red-500">
                    {product.price.toLocaleString('ru-Ru')} RUB
                </p>
            </div>
        </div>
    )
}