import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We'll send you a confirmation email with your order details.
        </p>
        <div className="space-y-4">
          <Link
            to="/orders"
            className="block w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Track Your Order
          </Link>
          <Link
            to="/"
            className="block w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 