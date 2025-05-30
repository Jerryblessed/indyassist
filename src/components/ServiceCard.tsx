import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { CityService } from '../types';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  service: CityService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as Record<string, React.FC<{ className?: string }>>)[service.icon];
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <div className="w-12 h-12 bg-indy-blue-100 rounded-full flex items-center justify-center mb-4">
          {IconComponent && <IconComponent className="w-6 h-6 text-indy-blue-500" />}
        </div>
        <h3 className="font-semibold text-lg text-indy-blue-500 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
        <a 
          href={service.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-indy-blue-500 hover:text-indy-gold-500 transition-colors text-sm font-medium"
        >
          Learn more <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;