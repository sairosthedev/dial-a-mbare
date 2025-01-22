import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import { ProductProvider } from './context/ProductContext';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';

// Page imports
import Home from './pages/Home';
import Vegetables from './pages/Vegetables';
import Fruits from './pages/Fruits';
import FarmAnimals from './pages/FarmAnimals';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Orders from './pages/Orders';
import Admin from './pages/Admin';

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <OrderProvider>
          <Router>
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 2000,
                style: {
                  background: '#22c55e',
                  color: '#fff',
                },
                success: {
                  duration: 2000,
                  iconTheme: {
                    primary: 'white',
                    secondary: '#22c55e',
                  },
                },
              }}
            />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/fruits" element={<Fruits />} />
                <Route path="/farm-animals" element={<FarmAnimals />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Layout>
          </Router>
        </OrderProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;