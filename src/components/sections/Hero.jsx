import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
    return (
      <div className="relative h-[500px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Fresh Farm Produce Delivered to Your Door
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Order fresh vegetables, fruits, and farm animals directly from local farmers in Mbare
            </p>
            
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for fresh produce..."
                className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;