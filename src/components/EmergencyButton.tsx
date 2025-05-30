import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Phone, X } from 'lucide-react';

const EmergencyButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 border border-error-500 w-64"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-error-700 flex items-center">
                <AlertTriangle size={16} className="mr-1" /> Emergency Services
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close emergency panel"
              >
                <X size={16} />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              For immediate emergency assistance, please call:
            </p>
            
            <a
              href="tel:911"
              className="bg-error-500 hover:bg-error-700 text-white py-2 px-4 rounded flex items-center justify-center mb-2 transition-colors"
            >
              <Phone size={16} className="mr-2" /> Call 911
            </a>
            
            <div className="text-xs text-gray-500 mt-2">
              Other emergency numbers:
              <ul className="mt-1 space-y-1">
                <li>
                  <a href="tel:3173273811" className="text-indy-blue-500 hover:underline">
                    Non-emergency Police: 317-327-3811
                  </a>
                </li>
                <li>
                  <a href="tel:3173273337" className="text-indy-blue-500 hover:underline">
                    Mayor's Action Center: 317-327-4622
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-error-500 hover:bg-error-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2"
        aria-label="Emergency services"
      >
        <AlertTriangle size={24} />
      </motion.button>
    </div>
  );
};

export default EmergencyButton;