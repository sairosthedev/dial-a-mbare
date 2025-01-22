import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductSection = ({ title, icon, products }) => {
  const { addToCart } = useCart();

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center space-x-2 mb-8">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-green-600 font-bold">
                  ${product.price.toFixed(2)} / {product.unit}
                </p>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection; 