import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const products = [
        {
            id: 1,
            productName: 'Детская футболка',
            productImage: 'path/to/image1.jpg',
            productPrice: '500₴',
        },
        {
            id: 2,
            productName: 'Детские шорты',
            productImage: 'path/to/image2.jpg',
            productPrice: '600₴',
        },
        {
            id: 3,
            productName: 'Детская куртка',
            productImage: 'path/to/image3.jpg',
            productPrice: '1200₴',
        },
    ];

    return (
        <div className="home">
            <h1>Главная страница интернет-магазина детской одежды</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        productName={product.productName} 
                        productImage={product.productImage} 
                        productPrice={product.productPrice} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;