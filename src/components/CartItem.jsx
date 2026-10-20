export default function CartItem({ item, onRemove }) {
    return (
        <div className="flex gap-3 bg-gray-50 rounded-xl p-3">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
            <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-purple-600 font-bold">{item.price.toLocaleString('ru-Ru')} Р</p>
            </div>
            <button
                onClick={onRemove}
                className="text-red-500 hover:bg-red-50 p-2 rounded-lg h-fit transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    )
}