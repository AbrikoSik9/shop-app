export const products = [
    { id: 1, name: 'Кроссовки Nike Air', price: 8990, category: 'Обувь', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', rating: 4.8 },
    { id: 2, name: 'Смартфон iPhone 15', price: 79990, category: 'Электроника', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', rating: 4.9 },
    { id: 3, name: 'Часы Apple Watch', price: 34990, category: 'Электроника', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400', rating: 4.7},
    { id: 4, name: 'Рюкзак Urban', price: 4590, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', rating: 4.5},
    { id: 5, name: 'Наушники Sony', price: 12990, category: 'Электроника', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', rating: 4.6},
    { id: 6, name: 'Куртка зимняя', price: 15990, category: 'Одежда', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', rating: 4.4},
    { id: 7, name: 'Очки солнцезащитные', price: 3990, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400', rating: 4.3},
    { id: 8, name: 'Фотоаппарат Canon', price: 459900, category: 'Электроника', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400', rating: 4.8},

]

export const categories = ['Все', ...new Set(products.map(p => p.category))]