import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dial A Mbare</h3>
              <p className="text-green-200">
                Your trusted source for fresh farm produce delivered directly to your doorstep.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+263 78 603 3933</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>info@dialambare.co.zw</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Mbare, Harare, Zimbabwe</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-200">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-green-200">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-green-200">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; {new Date().getFullYear()} Dial A Mbare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;