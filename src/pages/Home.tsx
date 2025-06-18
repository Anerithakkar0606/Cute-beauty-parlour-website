import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Crown } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "5-Star Service",
      description: "Exceptional service rated by satisfied clients"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Stylists",
      description: "Professionally trained stylists with years of experience"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Products",
      description: "Only the finest beauty brands and professional products"
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Legacy",
      description: "Years of legacy providing service"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-light-pink-50 to-light-pink-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-charcoal-900 mb-6">
                Discover Your
                <span className="text-light-pink-600 block">Natural Beauty</span>
              </h1>
              <p className="text-xl text-charcoal-700 mb-8 leading-relaxed">
                Experience luxury and elegance at Cute Beauty Parlour. Our expert stylists and premium services are designed to bring out the best in you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-light-pink-600 text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-light-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  View Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-light-pink-600 text-light-pink-600 px-8 py-3 rounded-lg font-inter font-semibold hover:bg-light-pink-600 hover:text-white transition-all duration-300 text-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beauty salon interior"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal-900 mb-4">
              Why Choose us?
            </h2>
            <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
              We're committed to providing exceptional beauty services that exceed your expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-light-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-light-pink-600 group-hover:bg-light-pink-200 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-charcoal-800 to-charcoal-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your appointment today and experience the difference our expert stylists can make
          </p>
          <Link
            to="/contact"
            className="bg-light-pink-600 text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-light-pink-700 transition-all duration-300 inline-flex items-center group"
          >
            Book Your Appointment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;