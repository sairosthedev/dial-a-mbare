import React from 'react';
import ProductPage from './ProductPage';

const vegetables = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    description: "Locally grown, ripe and juicy tomatoes",
    price: 2.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=80"
  },
  {
    id: 2,
    name: "Green Leafy Spinach",
    description: "Fresh and crispy spinach leaves",
    price: 1.99,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80"
  },
  {
    id: 3,
    name: "Carrots",
    description: "Sweet and crunchy organic carrots",
    price: 1.49,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&q=80"
  },
  {
    id: 4,
    name: "Green Peppers",
    description: "Fresh bell peppers perfect for salads",
    price: 3.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&q=80"
  }
];

const Vegetables = () => {
  return <ProductPage title="Fresh Vegetables" products={vegetables} />;
};

export default Vegetables; 