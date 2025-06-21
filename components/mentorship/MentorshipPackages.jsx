import React from 'react'

const MentorshipPackages = ({ packages }) => (
  <section className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
      Mentorship Packages
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {packages.map((pkg, index) => (
        <div key={index} className={`bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-0 hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-bold text-gray-800">₹{pkg.price}</span>
              <span className="text-gray-600">/{pkg.duration}</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">{pkg.description}</p>
            <ul className="space-y-3 mb-6 sm:mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${pkg.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' : 'border border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
              Choose Package
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default MentorshipPackages 