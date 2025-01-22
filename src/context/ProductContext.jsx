import React, { createContext, useContext, useReducer } from 'react';
import toast from 'react-hot-toast';

const ProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: Date.now() }]
      };
    
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    
    default:
      return state;
  }
};

const initialProducts = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    description: "Locally grown, ripe and juicy tomatoes",
    price: 2.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=80",
    category: "vegetables"
  },
  {
    id: 2,
    name: "Green Leafy Spinach",
    description: "Fresh and crispy spinach leaves",
    price: 1.99,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80",
    category: "vegetables"
  },
  {
    id: 3,
    name: "Sweet Bananas",
    description: "Fresh, ripe bananas from local farms",
    price: 1.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
    category: "fruits"
  },
  {
    id: 4,
    name: "Free Range Chickens",
    description: "Healthy, locally raised free-range chickens",
    price: 15.00,
    unit: "each",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
    category: "animals"
  }
];

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: initialProducts
  });

  const addProduct = (product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
    toast.success('Product added successfully');
  };

  const updateProduct = (product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: product });
    toast.success('Product updated successfully');
  };

  const deleteProduct = (productId) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: productId });
    toast.success('Product deleted successfully');
  };

  const getProductsByCategory = (category) => {
    return state.products.filter(product => product.category === category);
  };

  const getAllProducts = () => {
    return state.products;
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductsByCategory,
        getAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}; 