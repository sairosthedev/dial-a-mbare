import React, { createContext, useContext, useReducer } from 'react';

const OrderContext = createContext();

const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, { ...action.payload, id: Date.now().toString() }],
      };
    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.orderId
            ? { ...order, status: action.payload.status }
            : order
        ),
      };
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, {
    orders: [
      {
        id: '1',
        items: [
          {
            id: 1,
            name: "Fresh Tomatoes",
            quantity: 2,
            price: 2.99,
            unit: "kg"
          }
        ],
        total: 5.98,
        customer: {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "1234567890",
          address: "123 Main St",
          city: "Harare"
        },
        orderDate: "2024-01-22T10:00:00Z",
        status: "processing"
      }
    ]
  });

  const addOrder = (order) => {
    dispatch({ type: 'ADD_ORDER', payload: order });
  };

  const updateOrderStatus = (orderId, status) => {
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { orderId, status } });
  };

  const getOrderById = (orderId) => {
    return state.orders.find(order => order.id === orderId);
  };

  const getOrdersByCustomerEmail = (email) => {
    return state.orders.filter(order => order.customer.email === email);
  };

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        addOrder,
        updateOrderStatus,
        getOrderById,
        getOrdersByCustomerEmail,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}; 