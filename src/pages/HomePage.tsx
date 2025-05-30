import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Building2, HelpCircle } from 'lucide-react';
import { cityServices } from '../data/cityServices';
import ServiceCard from '../components/ServiceCard';

const HomePage: React.FC = () => {
  // Featured services (show first 3)
  const featuredServices = cityServices.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indy-blue-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Indianapolis Resident Assistant
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-indy-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI-powered assistance for 870,000+ Indianapolis residents
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/chat" 
                className="bg-indy-gold-500 hover:bg-indy-gold-600 text-indy-blue-900 font-medium py-3 px-8 rounded-lg inline-flex items-center transition-colors"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-indy-blue-500">
            How Can We Help You Today?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-16 h-16 bg-indy-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-indy-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indy-blue-500">Chat with AI Assistant</h3>
              <p className="text-gray-600 mb-4">
                Get instant answers to your questions about Indianapolis city services, programs, and resources.
              </p>
              <Link 
                to="/chat" 
                className="text-indy-blue-500 hover:text-indy-gold-500 font-medium inline-flex items-center"
              >
                Start a conversation
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-16 h-16 bg-indy-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-indy-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indy-blue-500">City Services</h3>
              <p className="text-gray-600 mb-4">
                Find information about trash collection, utilities, permits, parks, transportation, and more.
              </p>
              <Link 
                to="/services" 
                className="text-indy-blue-500 hover:text-indy-gold-500 font-medium inline-flex items-center"
              >
                Browse services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-16 h-16 bg-indy-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-indy-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indy-blue-500">FAQs</h3>
              <p className="text-gray-600 mb-4">
                Get answers to the most common questions about Indianapolis services and resources.
              </p>
              <Link 
                to="/faqs" 
                className="text-indy-blue-500 hover:text-indy-gold-500 font-medium inline-flex items-center"
              >
                View FAQs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-indy-blue-500">
              Featured Services
            </h2>
            <Link 
              to="/services" 
              className="text-indy-blue-500 hover:text-indy-gold-500 font-medium inline-flex items-center"
            >
              View all services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indy-gold-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indy-blue-900">
            Ready to get answers about Indianapolis city services?
          </h2>
          <p className="text-lg mb-8 text-indy-blue-800 max-w-2xl mx-auto">
            Our AI assistant is available 24/7 to help Indianapolis residents access information, 
            find resources, and connect with city services.
          </p>
          <Link 
            to="/chat" 
            className="bg-indy-blue-500 hover:bg-indy-blue-600 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center transition-colors"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Chat with IndyAssist
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;