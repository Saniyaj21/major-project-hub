import React from 'react'

const ContactForm = () => (
  <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your first name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your last name" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
        <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@university.edu" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">University/College</label>
        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your university name" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select project type</option>
          <option value="ecommerce">E-Commerce Platform</option>
          <option value="task-management">Task Management App</option>
          <option value="social-media">Social Media Platform</option>
          <option value="lms">Learning Management System</option>
          <option value="restaurant">Restaurant Ordering System</option>
          <option value="real-estate">Real Estate Portal</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Technology Stack</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select technology stack</option>
          <option value="mern">MERN Stack (MongoDB, Express, React, Node.js)</option>
          <option value="nextjs">Next.js with TypeScript</option>
          <option value="react">React with Firebase</option>
          <option value="vue">Vue.js with Node.js</option>
          <option value="other">Other/Not sure</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
        <textarea required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell me about your project idea, requirements, and any specific challenges you're facing..."></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Mentorship Package Interest</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Select package (optional)</option>
          <option value="basic">Basic Package (₹99)</option>
          <option value="standard">Standard Package (₹199)</option>
          <option value="premium">Premium Package (₹399)</option>
          <option value="custom">Custom/Not sure yet</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
        Send Message
      </button>
    </form>
  </div>
)

export default ContactForm 