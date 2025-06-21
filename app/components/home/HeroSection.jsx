import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -top-10 h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full bg-blue-100 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute right-0 top-0 h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 rounded-full bg-purple-100 blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute left-1/2 bottom-0 h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full bg-pink-100 blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-tight drop-shadow-lg">
            Build Your Final Year<br />
            Project Like a Pro
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Get expert 1:1 mentorship, access professional project templates, and build industry-grade applications. 
            Perfect for Indian students pursuing Computer Science and Engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link href="/projects" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 text-base sm:text-lg font-semibold w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                Explore Projects
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link href="/mentorship" className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110 text-base sm:text-lg font-semibold w-full sm:w-auto">
              Book 1:1 Call
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>500+ Students Mentored</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 