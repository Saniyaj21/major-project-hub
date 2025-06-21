import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const featureAccent = {
  blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
  purple: 'bg-gradient-to-r from-purple-400 to-purple-600',
  pink: 'bg-gradient-to-r from-pink-400 to-pink-600',
};

const FeatureCard = ({ feature, index }) => {
  return (
    <div 
      className={
        `relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 hover:shadow-3xl transition-all duration-300 ease-in-out group overflow-hidden flex flex-col`}
      style={{ minHeight: '320px' }}
    >
      {/* Accent Bar */}
      <div className={`h-2 w-full ${featureAccent[feature.color]}`}></div>
      <div className="relative z-10 space-y-4 flex-1 flex flex-col justify-between p-6 sm:p-8">
        {/* Icon */}
        <div className={`w-12 h-12 sm:w-14 sm:h-14 ${featureAccent[feature.color]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md mx-auto`}>
          <Image 
            src={feature.icon} 
            alt={feature.title} 
            width={28} 
            height={28} 
            className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-6"
          />
        </div>
        {/* Title and Description */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {feature.description}
          </p>
        </div>
        {/* Feature List */}
        <ul className="space-y-2 mt-4">
          {feature.features.map((item, i) => (
            <li key={i} className="flex items-center text-gray-700 text-sm sm:text-base">
              <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        {/* Learn More Link */}
        <Link href="/mentorship" className="inline-flex items-center text-blue-600 text-sm sm:text-base font-medium group/link cursor-pointer pt-2 hover:underline mt-4">
          <span>Learn More</span>
          <svg 
            className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default FeatureCard 