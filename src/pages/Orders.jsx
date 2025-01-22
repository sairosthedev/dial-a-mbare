import React, { useState } from 'react';
import { useOrders } from '../context/OrderContext';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const statusIcons = {
  pending: <Clock className="w-6 h-6 text-yellow-500" />,
  processing: <Package className="w-6 h-6 text-blue-500" />,
  shipping: <Truck className="w-6 h-6 text-purple-500" />,
  delivered: <CheckCircle className="w-6 h-6 text-green-500" />
};

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipping: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800'
};

const Orders = () => {
  const [email, setEmail] = useState('');
  const [searchedOrders, setSearchedOrders] = useState(null);
  const { getOrdersByCustomerEmail } = useOrders();

  const handleSearch = (e) => {
    e.preventDefault();
    const orders = getOrdersByCustomerEmail(email);
    setSearchedOrders(orders);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Track Your Orders</h1>

      <div className="max-w-md mb-8">
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Email used for order"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Find Orders
          </button>
        </form>
      </div>

      {searchedOrders && (
        <div className="space-y-6">
          {searchedOrders.length === 0 ? (
            <p className="text-gray-600">No orders found for this email address.</p>
          ) : (
            searchedOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                    <p className="text-gray-600">{formatDate(order.orderDate)}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${statusColors[order.status]}`}>
                    <div className="flex items-center space-x-1">
                      {statusIcons[order.status]}
                      <span className="capitalize">{order.status}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-b py-4 my-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          {item.quantity} x ${item.price.toFixed(2)} / {item.unit}
                        </p>
                      </div>
                      <p className="font-medium">
                        ${(item.quantity * item.price).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    <p>Delivery to:</p>
                    <p>{order.customer.firstName} {order.customer.lastName}</p>
                    <p>{order.customer.address}</p>
                    <p>{order.customer.city}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="text-xl font-bold text-green-600">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Orders; 