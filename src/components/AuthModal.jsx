import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAuth } from "../hooks/useAuth";

export default function AuthModal({ isOpen, onClose, defaultTab = 'login' }) {
    const [tab, setTab] = useState(defaultTab)
    const { setError } = useAuth()

    useEffect(() => {
        if (isOpen) {
            setTab(defaultTab)
            setError('')
        }
    }, [isOpen, defaultTab, setError])

    useEffect(() => {
        if (!isOpen) return
        const handler = (e) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [isOpen, onClose])

    if (!isOpen) return null

    const handlerSuccess = () => {
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-[fadeIn_0.2s_ease-out">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {tab === 'login' ? (
                    <LoginForm
                        onSuccess={handlerSuccess}
                        onSwitch={() => { setTab('register'); setError('') }}
                    />
                ) : (
                    <RegisterForm
                        onSuccess={handlerSuccess}
                        onSwitch={() => { setTab('login'); setError('') }}
                    />
                )}
            </div>
        </div>
    )
}