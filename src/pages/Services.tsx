import React, { useState } from 'react';
import { Scissors, Sparkles, Crown, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('hair');

  const categories = [
    { id: 'hair', name: 'Hair Services', icon: <Scissors className="h-5 w-5" /> },
    { id: 'skin', name: 'Skincare', icon: <Sparkles className="h-5 w-5" /> },
    { id: 'bridal', name: 'Bridal Packages', icon: <Crown className="h-5 w-5" /> },
    { id: 'nails', name: 'Nail Art', icon: <Palette className="h-5 w-5" /> }
  ];

  const services = {
    hair: [
      {
        name: 'Hair Cut & Style',
        price: 'From $65',
        duration: '60 min',
        image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Professional haircut and styling tailored to your face shape and lifestyle',
        brands: ['Redken', 'L\'Oréal', 'Schwarzkopf']
      },
      {
        name: 'Hair Coloring',
        price: 'From $120',
        duration: '120 min',
        image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Full color service including highlights, lowlights, and all-over color',
        brands: ['Wella', 'Matrix', 'Redken']
      },
      {
        name: 'Hair Treatment',
        price: 'From $85',
        duration: '90 min',
        image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Deep conditioning and repair treatments for damaged hair',
        brands: ['Olaplex', 'Kerastase', 'Moroccanoil']
      },
      {
        name: 'Blowout & Styling',
        price: 'From $45',
        duration: '45 min',
        image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Professional blowout with heat styling for special occasions',
        brands: ['GHD', 'Dyson', 'T3']
      }
    ],
    skin: [
      {
        name: 'Classic Facial',
        price: 'From $90',
        duration: '75 min',
        image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Deep cleansing facial with customized treatment for your skin type',
        brands: ['Dermalogica', 'SkinCeuticals', 'Obagi']
      },
      {
        name: 'Anti-Aging Treatment',
        price: 'From $150',
        duration: '90 min',
        image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Advanced anti-aging facial with peptides and growth factors',
        brands: ['Jan Marini', 'PCA Skin', 'IMAGE Skincare']
      },
      {
        name: 'Microdermabrasion',
        price: 'From $120',
        duration: '60 min',
        image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Exfoliating treatment to reveal smoother, brighter skin',
        brands: ['HydraFacial', 'DiamondTome', 'Crystal Clear']
      }
    ],
    bridal: [
      {
        name: 'Bridal Hair & Makeup',
        price: 'From $350',
        duration: '180 min',
        image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Complete bridal styling including trial session and wedding day service',
        brands: ['MAC', 'Urban Decay', 'Charlotte Tilbury']
      },
      {
        name: 'Bridal Party Package',
        price: 'From $180/person',
        duration: '120 min',
        image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Hair and makeup services for bridesmaids and family members',
        brands: ['NARS', 'Bobbi Brown', 'Laura Mercier']
      },
      {
        name: 'Pre-Wedding Spa Day',
        price: 'From $450',
        duration: '240 min',
        image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Full day of pampering including facial, massage, and styling',
        brands: ['Elemis', 'Clarins', 'Thalgo']
      }
    ],
    nails: [
      {
        name: 'Gel Manicure',
        price: 'From $45',
        duration: '60 min',
        image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Long-lasting gel polish manicure in hundreds of colors',
        brands: ['OPI', 'Essie', 'CND Shellac']
      },
      {
        name: 'Nail Art Design',
        price: 'From $65',
        duration: '90 min',
        image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Custom nail art designs from simple to intricate patterns',
        brands: ['Young Nails', 'Akzentz', 'Artistic Nail Design']
      },
      {
        name: 'Luxury Pedicure',
        price: 'From $65',
        duration: '75 min',
        image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Relaxing pedicure with exfoliation, massage, and polish',
        brands: ['Footlogix', 'CND', 'OPI']
      }
    ]
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-pink-50 to-light-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-charcoal-900 mb-6 animate-slide-up">
              Our Services
            </h1>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Discover our comprehensive range of beauty services, each designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-light-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-charcoal-700 hover:bg-light-pink-100 hover:text-light-pink-700'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeCategory as keyof typeof services].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-inter font-semibold text-charcoal-900">
                      {service.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-semibold text-charcoal-900">
                      {service.name}
                    </h3>
                    <span className="text-lg font-inter font-bold text-light-pink-600">
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-charcoal-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm font-inter font-medium text-charcoal-900 mb-2">
                      Premium Brands:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((brand, brandIndex) => (
                        <span
                          key={brandIndex}
                          className="bg-light-pink-50 text-light-pink-700 px-2 py-1 rounded text-xs font-inter font-medium"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-light-pink-600 text-white py-3 rounded-lg font-inter font-semibold hover:bg-light-pink-700 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal-900 mb-4">
              Trusted Brands We Use
            </h2>
            <p className="text-xl text-charcoal-700">
              We partner with the world's leading beauty brands to ensure exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Redken', 'L\'Oréal', 'Wella', 'OPI', 'MAC', 'Dermalogica', 'Olaplex', 'SkinCeuticals'].map((brand, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-charcoal-800 font-inter font-semibold">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;