import Header from "./components/Header"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import { use, useState } from "react"
/* import ProductCard from "./components/ProductCard" */
import ProductGrid from "./components/ProductGrid"
import CartSidebar from "./components/CartSidebar"
import Footer from "./components/Footer"
import { products, categories } from "./data/product"
import AuthModal from "./components/AuthModal"

export default function App() {
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('Все')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [authState, setAuthState] = useState({ open: false, tab: 'login' })

  const filtered = category === 'Все'
    ? products
    : products.filter(p => p.category === category)

    const addToCart = (product) => setCart([...cart, product])

    const removeFromCart = (index) => 
      setCart(cart.filter((_, i) => i !== index))

    const openAuth = (tab = 'login') => setAuthState({ open: true, tab })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        carCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={openAuth}
      />

      <Hero />

      <Categories 
        categories={categories}
        active={category}
        onChange={setCategory}
      />

      <ProductGrid products={filtered} onAdd={addToCart} />

      <CartSidebar
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />

      <AuthModal
        isOpen={authState.open}
        defaultTab={authState.tab}
        onClose={() => setAuthState({ open: false, tab: 'login' })}
      />

      <Footer />
    </div>
  )
}
