import React from 'react'
import Link from 'next/link'

const MentorshipHero = () => (
  <section className="text-center mb-12 sm:mb-16">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      Project Mentorship
    </h1>
    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
      Get expert guidance to build your final year project. From concept to completion, I'll help you create a professional-grade application that stands out.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold">
        Book 1:1 Call
      </button>
      <Link href="/contact" className="border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors font-semibold">
        Contact Me
      </Link>
    </div>
  </section>
)

export default MentorshipHero 