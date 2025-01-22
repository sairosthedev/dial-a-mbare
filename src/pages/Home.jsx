import React from 'react';
import { Truck, Phone, Leaf, Apple, Beef } from 'lucide-react';
import Hero from '../components/sections/Hero';
import ProductSection from '../components/sections/ProductSection';

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

const animals = [
  {
    id: 1,
    name: "Free Range Chickens",
    description: "Healthy, locally raised free-range chickens",
    price: 15.00,
    unit: "each",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80"
  },
  {
    id: 2,
    name: "Goats",
    description: "Healthy local goats for farming or meat",
    price: 150.00,
    unit: "each",
    image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=600&q=80"
  },
  {
    id: 3,
    name: "Rabbits",
    description: "Farm-raised rabbits",
    price: 25.00,
    unit: "each",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&q=80"
  },
  {
    id: 4,
    name: "Ducks",
    description: "Fresh farm ducks",
    price: 20.00,
    unit: "each",
    image: "https://images.unsplash.com/photo-1556713304-e5ac0f02e516?w=600&q=80"
  }
];

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg">
            <Truck className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-center text-gray-600">Same-day delivery within Mbare and surrounding areas</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg">
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh Produce</h3>
            <p className="text-center text-gray-600">Direct from local farmers to your table</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg">
            <Phone className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
            <p className="text-center text-gray-600">Order online or call us directly</p>
          </div>
        </div>
      </section>
      
      <ProductSection 
        title="Fresh Vegetables" 
        icon={<Leaf className="w-6 h-6" />}
        products={vegetables}
        linkTo="/vegetables"
      />
      
      <ProductSection 
        title="Fresh Fruits" 
        icon={<Apple className="w-6 h-6" />}
        products={fruits}
        linkTo="/fruits"
      />
      
      <ProductSection 
        title="Farm Animals" 
        icon={<Beef className="w-6 h-6" />}
        products={animals}
        linkTo="/farm-animals"
      />
    </main>
  );
};

export default Home; 