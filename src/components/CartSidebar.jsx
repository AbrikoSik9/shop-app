import CartItem from "./CartItem";

export default function CartSidebar({ isOpen, cart, onClose, onRemove }) {
    if (!isOpen) return null

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="fixed inset-0 z-50 flex">
            <div 
                className="flex-1 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
                <div className="p-6 border-b flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Корзина</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l1 2 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {cart.length === 0 ? (
                        <div className="text-center text-gray-500 mt-20">
                            <svg className="w-20 h-20 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox=" 0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p>Корзина пуста</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map(( item, index) => (
                                <CartItem key={index} item={item} onRemove={() => onRemove(index)} /> 
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 border-t bg-gray-50">
                        <div className="flex justify-between mb-4 text-xl">
                            <span className="font-medium">Итого:</span>
                            <span className="font-bold text-purple-600">{totalPrice.toLocaleString('ru-RU')} P</span>
                        </div>
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
                            Оформить заказ
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
