import React from 'react'

const ContactQuickMethods = ({ contactMethods }) => (
  <div>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Quick Contact</h2>
    <div className="space-y-4">
      {contactMethods.map((method, index) => (
        <a
          key={index}
          href={method.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-2xl">{method.icon}</div>
          <div>
            <div className="font-semibold text-gray-800">{method.title}</div>
            <div className="text-gray-600 text-sm">{method.description}</div>
            <div className="text-blue-600 text-sm font-medium mt-1">{method.action}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
)

export default ContactQuickMethods 