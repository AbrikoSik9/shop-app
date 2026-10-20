import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

export default function Header({ carCount, onCartClick, onAuthClick }) {
    const { user, logout } = useAuth()
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                        ShopStyle
                    </h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="hidden sm:block font-medium text-gray-700 max-w-[120px] truncate">
                                    {user.name}
                                </span>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            { menuOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xg border border-gray-100 py-2 z-20">
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="font-medium text-gray-900">{user.name}</p>
                                            <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                        </div>
                                        <button
                                            onClick={() => { logout(); setMenuOpen(false) }}
                                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            Выйти
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={() => onAuthClick('login')}
                            className="hidden sm:block px-4 py-2 rounded-xl font-medium text-purple-600 hover:bg-purple-50 transition-colors"
                        >
                            Войти
                        </button>
                    )}
                </div>

                <button
                    onClick={onCartClick}
                    className="relative flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition-all"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h21.4 2M7 13h1014-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Корзина
                    {carCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                            {carCount}
                        </span>
                    )}
                </button>
            </div>
        </header>
    )
}