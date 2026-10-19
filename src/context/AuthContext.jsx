import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null)

const USERS_KEY = 'shop_users'
const CURRENT_USER_KEY = 'shop_current_user'

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY)) || []
    } catch {
        return []
    }
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const saved = localStorage.getItem(CURRENT_USER_KEY)
        if (saved) {
            try {
                setUser(JSON.parse(saved))
            } catch {
                localStorage.removeItem(CURRENT_USER_KEY)
            }
        }
    }, [])

    const register = ({ name, email, password }) => {
        setError('')
        const users = getUsers()

        if (users.some(u => u.email === email)) {
            setError('Пользователь с таким email уже существует')
            return false
        }

        if (password.length < 6) {
            setError('Пароль должен содержать минимум 6 символов')
            return false
        }

        const newUser = { id: Date.now(), name, email, password }
        users.push(newUser)
        saveUsers(users)

        const safeUser = { id: newUser.id, name: newUser.name, email: newUser.email }
        setUser(safeUser)
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser))
        return true
    }

    const login = ({ email, password }) => {
        setError('')
        const users = getUsers()
        const found = users.find(u => u.email === email && u.password === password)

        if (!found) {
            setError('Неверный email или пароль')
            return false
        }

        const safeUser = { id: found.id, name: found.name, email: found.email }
        setUser(safeUser)
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser))
        return true
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem(CURRENT_USER_KEY)
    }

    return (
        <AuthContext.Provider value={{ user, error, register, login, logout, setError}}>
            {children}
        </AuthContext.Provider>
    )
}