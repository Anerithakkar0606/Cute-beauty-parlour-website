import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = '1234567890';
    const message = 'Hi! I would like to book an appointment at Cute Beauty Parlour.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-pink-50 to-light-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-charcoal-900 mb-6 animate-slide-up">
              Contact Us
            </h1>
            <p className="text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Ready to transform your look? Get in touch with us to book your appointment or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-playfair font-bold text-charcoal-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-light-pink-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-light-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-charcoal-900 mb-1">Phone</h3>
                    <p className="text-charcoal-700">+91 8320874404</p>
                    <p className="text-sm text-charcoal-600">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-pink-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-light-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-charcoal-900 mb-1">Email</h3>
                    <p className="text-charcoal-700">cute.4719@gmail.com</p>
                    <p className="text-sm text-charcoal-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-pink-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-light-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-charcoal-900 mb-1">Address</h3>
                    <p className="text-charcoal-700">Cute Beauty Parlour, D-256/257<br />Kalvibid, Bhavnagar-364002</p>
                    <p className="text-sm text-charcoal-600">Easy parking available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-pink-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-light-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-charcoal-900 mb-1">Hours</h3>
                    <div className="text-charcoal-700 space-y-1">
                      <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
                      <p className="text-sm text-charcoal-600">Closed on Sundays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h3 className="font-playfair font-semibold text-charcoal-900 mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                  Quick WhatsApp Booking
                </h3>
                <p className="text-charcoal-700 mb-4">
                  For instant booking and quick questions, connect with us on WhatsApp!
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-playfair font-bold text-charcoal-900 mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-inter font-medium text-charcoal-800 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-pink-500 focus:border-light-pink-500 transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-inter font-medium text-charcoal-800 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-pink-500 focus:border-light-pink-500 transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-inter font-medium text-charcoal-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-pink-500 focus:border-light-pink-500 transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-inter font-medium text-charcoal-800 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-pink-500 focus:border-light-pink-500 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="hair-cut">Hair Cut & Style</option>
                      <option value="hair-color">Hair Coloring</option>
                      <option value="facial">Facial Treatment</option>
                      <option value="bridal">Bridal Package</option>
                      <option value="nails">Nail Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-inter font-medium text-charcoal-800 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-pink-500 focus:border-light-pink-500 transition-colors duration-300"
                      placeholder="Tell us about your needs or ask any questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-light-pink-600 text-white py-3 px-6 rounded-lg font-inter font-semibold hover:bg-light-pink-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;