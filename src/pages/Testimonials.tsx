import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      service: 'Hair Coloring & Cut',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Absolutely amazing experience! The team at Bella Salon transformed my hair beyond my expectations. The color is perfect and the cut is exactly what I wanted. Highly recommend!',
      date: '2 weeks ago'
    },
    {
      name: 'Jessica Rodriguez',
      service: 'Bridal Package',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'They made my wedding day absolutely perfect! The bridal package was worth every penny. My hair and makeup looked flawless all day long. Thank you for making me feel like a princess!',
      date: '1 month ago'
    },
    {
      name: 'Amanda Chen',
      service: 'Facial Treatment',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'The facial treatment was incredibly relaxing and effective. My skin has never looked better! The aesthetician was knowledgeable and recommended the perfect skincare routine for me.',
      date: '3 weeks ago'
    },
    {
      name: 'Emily Johnson',
      service: 'Hair Treatment',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'My hair was severely damaged from years of coloring. After just one treatment at Bella Salon, my hair feels like silk! The staff is professional and the results speak for themselves.',
      date: '1 week ago'
    },
    {
      name: 'Lisa Thompson',
      service: 'Nail Art',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'The nail art here is incredible! Such attention to detail and creativity. I always get compliments on my nails after visiting Bella Salon. The technicians are true artists!',
      date: '4 days ago'
    },
    {
      name: 'Maria Santos',
      service: 'Full Service Day',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Spent the entire day at Bella Salon for a complete makeover. Hair, nails, facial - everything was perfect! The ambiance is so relaxing and the staff made me feel like royalty.',
      date: '2 months ago'
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating' },
    { number: '500+', label: 'Happy Clients' },
    { number: '98%', label: 'Return Rate' },
    { number: '50+', label: 'Google Reviews' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-pink-50 to-light-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-charcoal-900 mb-6 animate-slide-up">
              Client Testimonials
            </h1>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Don't just take our word for it. See what our satisfied clients have to say about their experience at Bella Salon.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-charcoal-700">
              Real experiences from real people who love Bella Salon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-playfair font-semibold text-charcoal-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-light-pink-600 font-inter">
                      {testimonial.service}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-light-pink-200" />
                  <p className="text-charcoal-700 leading-relaxed pl-6 mb-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="text-xs text-gray-500 font-inter">
                  {testimonial.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-800 to-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the Bella Salon difference for yourself. Book your appointment today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-light-pink-600 text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-light-pink-700 transition-all duration-300"
            >
              Book Appointment
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-inter font-semibold hover:bg-white hover:text-charcoal-900 transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-charcoal-700">
              We'd love to hear about your visit to Bella Salon
            </p>
          </div>

          <div className="bg-light-pink-50 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className="h-8 w-8 text-yellow-400 fill-current mx-1"
                />
              ))}
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-charcoal-900 mb-4">
              Leave us a Google Review
            </h3>
            <p className="text-charcoal-700 mb-6">
              Your feedback helps us improve and helps others discover our services
            </p>
            <a
              href="#"
              className="bg-light-pink-600 text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-light-pink-700 transition-colors duration-300 inline-block"
            >
              Write a Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;