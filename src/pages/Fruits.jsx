import React from 'react';
import ProductPage from './ProductPage';

const fruits = [
  {
    id: 1,
    name: "Sweet Bananas",
    description: "Fresh, ripe bananas from local farms",
    price: 1.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80"
  },
  {
    id: 2,
    name: "Juicy Oranges",
    description: "Sweet and tangy oranges, perfect for juicing",
    price: 2.49,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=600&q=80"
  },
  {
    id: 3,
    name: "Fresh Apples",
    description: "Crisp and sweet apples",
    price: 2.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80"
  },
  {
    id: 4,
    name: "Mangoes",
    description: "Sweet and ripe mangoes",
    price: 3.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80"
  }
];

const Fruits = () => {
  return <ProductPage title="Fresh Fruits" products={fruits} />;
};

export default Fruits; 