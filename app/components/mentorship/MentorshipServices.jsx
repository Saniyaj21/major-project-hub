import React from 'react'

const MentorshipServices = ({ services }) => (
  <section className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
      What I Offer
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
          <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default MentorshipServices 