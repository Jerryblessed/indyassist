import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FAQItem from '../components/FAQItem';
import { faqs } from '../data/faqs';

const FAQsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get unique categories
  const categories = ['all', ...new Set(faqs.map(faq => faq.category))];
  
  // Filter FAQs based on search term and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-indy-blue-500 mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-8">
          Find answers to common questions about Indianapolis city services
        </p>
        
        {/* Search and filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indy-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Category filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indy-blue-500 focus:border-transparent bg-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* FAQ list */}
        {filteredFAQs.length > 0 ? (
          <div>
            {filteredFAQs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 mb-4">No FAQs found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-indy-blue-500 hover:text-indy-blue-700"
            >
              Clear filters
            </button>
          </div>
        )}
        
        {/* Still have questions */}
        <div className="mt-12 bg-indy-blue-50 rounded-lg p-6 border border-indy-blue-100">
          <h2 className="text-xl font-semibold text-indy-blue-500 mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-700 mb-4">
            If you couldn't find the answer you were looking for, our AI assistant is ready to help.
          </p>
          <a 
            href="/chat" 
            className="inline-block bg-indy-blue-500 hover:bg-indy-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Chat with IndyAssist
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;