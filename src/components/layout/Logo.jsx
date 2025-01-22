import React from 'react';
import { ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 text-white hover:text-green-100">
      <ShoppingBasket className="w-8 h-8" />
      <div>
        <h1 className="text-2xl font-bold leading-none">Dial A Mbare</h1>
        <p className="text-xs text-green-200">Fresh from the farm</p>
      </div>
    </Link>
  );
};

export default Logo; 