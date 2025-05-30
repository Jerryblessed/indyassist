import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { cityServices } from '../data/cityServices';
import { CityService } from '../types';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter services based on search term
  const filteredServices = cityServices.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-indy-blue-500 mb-2">
          City Services
        </h1>
        <p className="text-gray-600 mb-8">
          Find information and resources for Indianapolis city services
        </p>
        
        {/* Search bar */}
        <div className="mb-8 max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indy-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Services grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No services found matching "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-indy-blue-500 hover:text-indy-blue-700"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;