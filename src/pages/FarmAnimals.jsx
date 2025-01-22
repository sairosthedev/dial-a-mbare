import React from 'react';
import ProductPage from './ProductPage';

const liveAnimals = [
  {
    id: 1,
    name: "Free Range Chickens",
    description: "Healthy, locally raised free-range chickens",
    price: 10.00,
    unit: "each",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80"
  },
  {
    id: 2,
    name: "Goats",
    description: "Healthy local goats for farming or meat",
    price: 100.00,
    unit: "each",
    image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=600&q=80"
  },
  {
    id: 3,
    name: "Rabbits",
    description: "Farm-raised rabbits",
    price: 15.00,
    unit: "each",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&q=80"
  },
  {
    id: 4,
    name: "Ducks",
    description: "Fresh farm ducks",
    price: 10.00,
    unit: "each",
    image: "https://www.warrenphotographic.co.uk/photography/bigs/03747-Domestic-ducks.jpg"
  }
];

const animalProducts = [
  {
    id: 5,
    name: "Fresh Eggs",
    description: "Farm-fresh chicken eggs",
    price: 4.99,
    unit: "dozen",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&q=80"
  },
  {
    id: 6,
    name: "Fresh Milk",
    description: "Pure, fresh cow's milk",
    price: 2.99,
    unit: "liter",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80"
  },
  {
    id: 7,
    name: "Fresh Beef",
    description: "Premium cut beef from local farms",
    price: 12.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&q=80"
  },
  {
    id: 8,
    name: "Chicken Meat",
    description: "Fresh chicken meat",
    price: 8.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&q=80"
  }
];

const FarmAnimals = () => {
  return (
    <div>
      <div className="mb-12">
        <ProductPage title="Live Farm Animals" products={liveAnimals} />
      </div>
      <div>
        <ProductPage title="Animal Products" products={animalProducts} />
      </div>
    </div>
  );
};

export default FarmAnimals; 