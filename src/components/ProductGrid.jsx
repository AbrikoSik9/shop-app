import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAdd }) {
    return (
        <section className="max-w-7xl mx-auto px-4 pb-16">
            <div className="grid grid-cold-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAdd={onAdd} />
                ))}
            </div>
        </section>
    )
}