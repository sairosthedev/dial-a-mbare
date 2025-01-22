import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-8">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-grow ml-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)} / {item.unit}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className="font-semibold w-24 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-end">
        <div className="text-xl font-bold mb-4">
          Total: ${getCartTotal().toFixed(2)}
        </div>
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart; 