import React from 'react';

interface ProductCardProps {
    productName: string;
    productImage: string;
    productPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ productName, productImage, productPrice }) => {
    return (
        <div className="product-card">
            <img src={productImage} alt={productName} />
            <h2>{productName}</h2>
            <p>${productPrice.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;