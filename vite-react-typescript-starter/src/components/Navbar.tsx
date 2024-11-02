import React, { useState } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700';
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <CreditCard className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">FinancePlus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} hover:text-blue-600 transition-colors`}>Home</Link>
            <Link to="/services" className={`${isActive('/services')} hover:text-blue-600 transition-colors`}>Services</Link>
            <Link to="/calculator" className={`${isActive('/calculator')} hover:text-blue-600 transition-colors`}>Calculator</Link>
            <Link to="/about" className={`${isActive('/about')} hover:text-blue-600 transition-colors`}>About</Link>
            <Link to="/contact" className={`${isActive('/contact')} hover:text-blue-600 transition-colors`}>Contact</Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link to="/" className={`block ${isActive('/')} hover:text-blue-600 transition-colors`}>Home</Link>
            <Link to="/services" className={`block ${isActive('/services')} hover:text-blue-600 transition-colors`}>Services</Link>
            <Link to="/calculator" className={`block ${isActive('/calculator')} hover:text-blue-600 transition-colors`}>Calculator</Link>
            <Link to="/about" className={`block ${isActive('/about')} hover:text-blue-600 transition-colors`}>About</Link>
            <Link to="/contact" className={`block ${isActive('/contact')} hover:text-blue-600 transition-colors`}>Contact</Link>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;