import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indy-blue-500 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">IndyAssist</h3>
            <p className="text-indy-blue-100 mb-4">
              Your AI-powered assistant for Indianapolis city services and information.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/cityofindianapolis" className="hover:text-indy-gold-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/cityofindy" className="hover:text-indy-gold-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/cityofindianapolis" className="hover:text-indy-gold-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-indy-blue-100 hover:text-indy-gold-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-indy-blue-100 hover:text-indy-gold-500 transition-colors">City Services</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-indy-blue-100 hover:text-indy-gold-500 transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/chat" className="text-indy-blue-100 hover:text-indy-gold-500 transition-colors">Chat with Us</Link>
              </li>
              <li>
                <a href="https://www.indy.gov" className="text-indy-blue-100 hover:text-indy-gold-500 transition-colors flex items-center">
                  Official City Website <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:317-327-4622" className="text-indy-blue-100 hover:text-indy-gold-500 transition-colors">
                  317-327-4622 (Mayor's Action Center)
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:support@indyassist.org" className="text-indy-blue-100 hover:text-indy-gold-500 transition-colors">
                  support@indyassist.org
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-indy-blue-100">
                In case of emergency, always call 911
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indy-blue-400 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-indy-blue-100 mb-4 md:mb-0">
              © {new Date().getFullYear()} IndyAssist. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-indy-blue-100 hover:text-indy-gold-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-indy-blue-100 hover:text-indy-gold-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-indy-blue-100 hover:text-indy-gold-500 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;