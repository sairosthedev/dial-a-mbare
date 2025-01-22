import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductPage = ({ title, products }) => {
  const { addToCart } = useCart();

  return (
    <div className="pt-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
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
      </div>
    </div>
  );
};

export default ProductPage; 