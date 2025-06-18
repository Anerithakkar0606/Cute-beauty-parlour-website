import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-light-pink-400 mb-4">
              Cute Beauty Parlour
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience luxury and elegance at Cute Beauty Parlour. We're dedicated to bringing out your natural beauty with our premium services and expert stylists.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cute_beauty_parlour?igsh=c2gzOHd0aHR4a2Rw" className="text-gray-400 hover:text-light-pink-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-light-pink-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-light-pink-400" />
                  <a 
                    href="tel:+918320874404" 
                    className="text-gray-300 hover:text-light-pink-400 transition-colors duration-300 cursor-pointer"
                  >
                  +91 8320874404
                  </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-light-pink-400" />
                <span className="text-gray-300">cute.4719@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-light-pink-400 mt-1" />
                <span className="text-gray-300">Cute Beauty Parlour, D-256/257<br />Kalvibid, Bhavnagar-364002</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Mon - Sat</span>
                <span>10:00 - 6:00</span>
              </div>
              <div className="flex justify-between">
                <p className="space-y-2 text-gray-400">Closed on Sundays</p>
              </div>  
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © Since 1960 . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;