import React from 'react';
import { Shield, Users, Building2, Award, Target, Globe } from 'lucide-react';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-50"
            alt="Modern office building"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">About FinancePlus</h1>
            <p className="text-xl">Your trusted partner in financial success since 1970</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600">To provide innovative financial solutions that empower individuals and businesses to achieve their goals while maintaining the highest standards of integrity and customer service.</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-gray-600">We prioritize the security of your financial information and maintain the highest standards of trust.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">Our customers are at the heart of everything we do. We're committed to your success.</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in all our services and continuously improve our offerings.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100k+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$10B+</div>
              <div className="text-gray-600">Loans Funded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                alt="CFO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">CFO</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;