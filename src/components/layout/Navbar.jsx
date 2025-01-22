import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { getCartCount } = useCart();
    const cartCount = getCartCount();
  
    return (
      <nav className="fixed top-0 w-full bg-green-600 text-white z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold">Dial A Mbare</Link>
            </div>
  
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-green-200">Home</Link>
              <Link to="/vegetables" className="hover:text-green-200">Vegetables</Link>
              <Link to="/fruits" className="hover:text-green-200">Fruits</Link>
              <Link to="/farm-animals" className="hover:text-green-200">Farm Animals</Link>
              <Link to="/cart" className="flex items-center space-x-1 bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({cartCount})</span>
              </Link>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
  
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <Link to="/" className="block py-2 hover:text-green-200">Home</Link>
              <Link to="/vegetables" className="block py-2 hover:text-green-200">Vegetables</Link>
              <Link to="/fruits" className="block py-2 hover:text-green-200">Fruits</Link>
              <Link to="/farm-animals" className="block py-2 hover:text-green-200">Farm Animals</Link>
              <Link to="/cart" className="flex items-center space-x-1 bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 mt-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({cartCount})</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;