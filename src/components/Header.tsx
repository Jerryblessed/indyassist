import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-indy sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MessageSquare className="h-8 w-8 text-indy-blue-500" />
          </motion.div>
          <div>
            <h1 className="text-xl font-semibold text-indy-blue-500">IndyAssist</h1>
            <p className="text-xs text-indy-blue-300">Serving 870,000+ residents</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-indy-blue-500 hover:text-indy-gold-500 transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-indy-blue-500 hover:text-indy-gold-500 transition-colors">
            City Services
          </Link>
          <Link to="/faqs" className="text-indy-blue-500 hover:text-indy-gold-500 transition-colors">
            FAQs
          </Link>
          <Link to="/chat" className="bg-indy-blue-500 text-white px-4 py-2 rounded-md hover:bg-indy-blue-600 transition-colors">
            Start Chat
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-indy-blue-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white py-4 px-4 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-indy-blue-500 hover:text-indy-gold-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-indy-blue-500 hover:text-indy-gold-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              City Services
            </Link>
            <Link 
              to="/faqs" 
              className="text-indy-blue-500 hover:text-indy-gold-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              to="/chat" 
              className="bg-indy-blue-500 text-white px-4 py-2 rounded-md hover:bg-indy-blue-600 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Chat
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;