import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">Have questions? We're here to help. Reach out to us through any of our channels below.</p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">1-800-FINANCE</p>
              <p className="text-gray-600">Mon-Fri 9am-6pm EST</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@financeplus.com</p>
              <p className="text-gray-600">support@financeplus.com</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-gray-600">123 Finance Street</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span>Quick Response Time</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949822!2d-74.11976341508873!3d40.70583158560652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1677923645320!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;