import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function RegisterForm({ onSuccess, onSwitch }) {
    const { register, error, setError } = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirm) {
            setError('Пароли не совпадают')
            return
        }
        if (register({ name, email, password })) {
            onSuccess?.()
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">Регистрация</h2>
            <p className="text-gray-500 text-sm mb-4">Создайте аккаунт за 30 секунд</p>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError('') }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Иван Иванов"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError('') }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError('') }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Минимум 6 символов" 
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Повторите пароль</label>
                <input
                    type="password"
                    required
                    value={confirm}
                    onChange={(e) => { setConfirm(e.target.value); setError('') }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="......."
                />
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-xl">
                    {error}
                </div>
            )}

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
                Создать аккаунт
            </button>

            <p className="text-center text-sm text-gray-500">
                Уже есть аккаунт?{' '}
                <button type="button" onClick={onSwitch} className="text-purple-600 font-medium hover:underline">
                    Войти
                </button>
            </p>
        </form>
    )
}