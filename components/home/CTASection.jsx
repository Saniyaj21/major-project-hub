import React from 'react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-md">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed px-4">
            Join thousands of Indian students who have successfully built their final year projects with our expert guidance. 
            Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="/projects" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 text-base sm:text-lg font-semibold">
              <span className="flex items-center justify-center gap-2">
                Explore Projects
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link href="/mentorship" className="group px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110 text-base sm:text-lg font-semibold">
              Book 1:1 Call
            </Link>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Starting from ₹99</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 