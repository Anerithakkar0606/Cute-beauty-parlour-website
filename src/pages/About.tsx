import React from 'react';
import { Heart, Users, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '15+', label: 'Expert Stylists' },
    { number: '50+', label: 'Awards Won' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Senior Stylist',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years of experience, Sarah founded Bella Salon with a vision to provide exceptional beauty services.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Hair Color Specialist',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Maria specializes in creative hair coloring techniques and has trained with top colorists worldwide.'
    },
    {
      name: 'Emma Chen',
      role: 'Skincare Expert',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emma brings expertise in advanced skincare treatments and holistic beauty approaches.'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-pink-50 to-light-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-charcoal-900 mb-6 animate-slide-up">
              About Bella Salon
            </h1>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              For over a decade, we've been dedicated to bringing out the natural beauty in every client who walks through our doors. Our passion for excellence and commitment to personalized service has made us the premier destination for beauty and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-charcoal-700 leading-relaxed">
                <p>
                  {/* add desc */}
                </p>
                <p>
                 {/* add desc */}
                </p>
                <p>
                  {/* add desc */}
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="bg-light-pink-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-light-pink-600" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-charcoal-900">Our Mission</h3>
                  <p className="text-charcoal-700">To enhance your natural beauty and boost your confidence</p>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon interior"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-light-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-charcoal-700">
              Numbers that speak to our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl lg:text-4xl font-playfair font-bold text-light-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-charcoal-700 font-inter font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-charcoal-700">
              Talented professionals dedicated to your beauty journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-charcoal-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-light-pink-600 font-inter font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-charcoal-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-slide-up">
              <div className="bg-light-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We strive for perfection in every service, using only the best products and techniques.
              </p>
            </div>
            
            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-light-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Community</h3>
              <p className="text-gray-300 leading-relaxed">
                We're more than a salon - we're a community that celebrates and supports each other.
              </p>
            </div>
            
            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-light-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We continuously evolve, staying at the forefront of beauty trends and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;