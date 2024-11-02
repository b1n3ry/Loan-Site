import React from 'react';
import { Briefcase, Home, PiggyBank, LineChart, ChevronRight } from 'lucide-react';

function Services() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-50"
            alt="Financial services"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Our Financial Services</h1>
            <p className="text-xl">Comprehensive financial solutions tailored to your needs</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Business Loans</h3>
              <p className="text-gray-600 mb-6">Fuel your business growth with our flexible financing options. Whether you're expanding operations or managing cash flow, we've got you covered.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Working capital loans</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Equipment financing</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Commercial real estate loans</span>
                </li>
              </ul>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mortgage Solutions</h3>
              <p className="text-gray-600 mb-6">Make your dream home a reality with our competitive mortgage rates and flexible payment options.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Fixed-rate mortgages</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Adjustable-rate mortgages</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Refinancing options</span>
                </li>
              </ul>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <PiggyBank className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Personal Loans</h3>
              <p className="text-gray-600 mb-6">Achieve your personal goals with our flexible personal loan options. From debt consolidation to major purchases.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Debt consolidation</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Home improvement loans</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Major purchase financing</span>
                </li>
              </ul>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <LineChart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Investment Services</h3>
              <p className="text-gray-600 mb-6">Build your wealth with our expert investment services. From retirement planning to portfolio management.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Retirement planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Portfolio management</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Investment advisory</span>
                </li>
              </ul>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Speak with our financial experts today and discover the perfect solution for your needs.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;