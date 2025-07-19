import React from 'react';

const Product: React.FC = () => {
    return (
        <div className="product">
            <h1>Название товара</h1>
            <img src="путь_к_изображению" alt="Изображение товара" />
            <p>Описание товара</p>
            <p>Цена: $0.00</p>
            <button>Добавить в корзину</button>
        </div>
    );
};

export default Product;