export interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    description?: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}