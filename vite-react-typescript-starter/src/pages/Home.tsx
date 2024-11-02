import React from 'react';
import { Calculator, Shield, Users, Building2, Phone, Mail, ChevronRight, DollarSign, PieChart, Clock } from 'lucide-react';
import LoanCalculator from '../components/LoanCalculator';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-50"
            alt="Business people discussing finances"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Smart Financial Solutions for Your Future</h1>
            <p className="text-xl mb-8">Get the funding you need with competitive rates and flexible terms tailored to your goals.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
              Apply Now <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
              <p className="text-gray-600">Access industry-leading interest rates with flexible repayment terms.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
              <p className="text-gray-600">Get approved within 24 hours with our streamlined application process.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure Process</h3>
              <p className="text-gray-600">Your data is protected with bank-level security and encryption.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Loan Calculator Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Calculate Your Loan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Use our loan calculator to estimate your monthly payments and see how much you could save.</p>
          </div>
          <LoanCalculator />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-400 mb-8">Our financial experts are here to help you achieve your goals. Contact us today for a free consultation.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>1-800-FINANCE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contact@financeplus.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-blue-400" />
                  <span>123 Finance Street, NY 10001</span>
                </div>
              </div>
            </div>
            <form className="bg-white text-gray-900 p-8 rounded-xl">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32"></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;