import React from 'react';
import { CreditCard, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">FinancePlus</span>
            </div>
            <p className="text-sm">Providing smart financial solutions for a better tomorrow. Licensed and regulated financial institution.</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Calculator</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Personal Loans</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Business Loans</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mortgage</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Investment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} FinancePlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;