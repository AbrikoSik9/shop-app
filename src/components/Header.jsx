import { use, useState } from "react"
import { useAuth } from "../hooks/useAuth"

export default function Header({ carCount, onCartClick, onAuthClick }) {
    const { user, logout } = useAuth()
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-line">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                <a href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">S</span>
                    </div>
                    <span className="font-semibold text-lg tracking-tight">ShopStyle</span>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500">
                    <a href="#" className="hover:text-gray-900 transition-colors">Каталог</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Новинки</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Распродажа</a>
                </nav>

                <div className="flex items-center gap-2">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="flex items-center gap-2 h-9 pl-1 pr-3 rounded-full hover:bg-gray-50 transition-colors" 
                            >
                                <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white font-semibold text-us">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="hidden sm:block text-sm font-medium max-w-[100px] truncate">
                                    {user.name}
                                </span>
                            </button>

                            { menuOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-1 z-20">
                                        <div className="px-4 py-2 border-b border-gray-200">
                                            <p className="font-meduim text-sm truncate">{user.name}</p>
                                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                        </div>
                                        <button
                                            onClick={() => { logout(); setMenuOpen(false) }}
                                            className="w-full text-left px-4 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
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
                            className="h-9 px-4 text-sm font-medium hover:bg-gray-50 rounded-full transition-colors"
                        >
                            Войти
                        </button>
                    )}
                </div>

                <button
                    onClick={onCartClick}
                    className="relative h-9 pl-3 pr-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h21.4 2M7 13h1014-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Корзина
                    {carCount > 0 && (
                        <span className="bg-white text-black text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                            {carCount}
                        </span>
                    )}
                </button>
            </div>
        </header>
    )
}