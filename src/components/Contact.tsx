import React from 'react';
    import { Phone, MapPin, Mail } from 'lucide-react';

    export function Contact() {
      return (
        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  We'd love to hear from you! Please use the contact form below or reach out to us using the contact information provided.
                </p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">+94 72 368 4367</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">36/3 Jambugasmulla Mawatha, Nugegoda</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">indunissanka@gmail.com</span>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                      rows={4}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }
