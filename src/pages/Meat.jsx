import React from 'react';
import ProductPage from './ProductPage';

const meat = [
  {
    id: 1,
    name: "Fresh Chicken",
    description: "Farm-fresh whole chicken",
    price: 5.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&q=80"
  },
  {
    id: 2,
    name: "Beef Steak",
    description: "Premium cut beef steak",
    price: 12.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&q=80"
  },
  {
    id: 3,
    name: "Pork Chops",
    description: "Tender pork chops",
    price: 8.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=600&q=80"
  },
  {
    id: 4,
    name: "Goat Meat",
    description: "Fresh local goat meat",
    price: 10.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80"
  }
];

const Meat = () => {
  return <ProductPage title="Fresh Meat" products={meat} />;
};

export default Meat; 