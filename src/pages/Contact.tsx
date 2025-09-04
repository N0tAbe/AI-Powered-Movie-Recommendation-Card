import React from 'react';
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
export const Contact = () => {
  return <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Contact Us
      </h1>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Have questions about AltFlicks? We're here to help! Fill out the
              form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MailIcon className="text-purple-400" />
                <span>support@altflicks.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <PhoneIcon className="text-purple-400" />
                <span>1-800-ALTFLIX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MessageCircleIcon className="text-purple-400" />
                <span>Live chat available 24/7</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input type="text" className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input type="email" className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea rows={4} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="w-full py-2 px-4 rounded-full font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>;
};