import React from 'react'
import Image from 'next/image'

const featureAccent = {
  blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
  purple: 'bg-gradient-to-r from-purple-400 to-purple-600',
  pink: 'bg-gradient-to-r from-pink-400 to-pink-600',
};

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-100 blur-3xl opacity-30 animate-pulse delay-700"></div>
            <div className="absolute left-1/2 bottom-0 h-64 w-64 rounded-full bg-pink-100 blur-3xl opacity-30 animate-pulse delay-1000"></div>
          </div>

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-tight drop-shadow-lg">
                Discover & Build<br />
                Your Dream Project
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Access a curated collection of innovative software projects, complete with documentation and presentations. Your gateway to excellence.
              </p>
              <div className="flex gap-6 justify-center items-center">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 text-lg font-semibold">
                  <span className="flex items-center gap-2">
                    Browse Projects
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group px-10 py-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110 text-lg font-semibold">
                  Upload Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative overflow-visible">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-x-1/2"></div>
            <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-30 translate-x-1/2"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3 drop-shadow-md">
                Why Choose Our Platform?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Empowering students with comprehensive resources and tools for successful project completion
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                {
                  icon: '/file.svg',
                  title: 'Complete Documentation',
                  description: 'Access professionally structured documentation templates and guides',
                  color: 'blue',
                  features: ['Project Reports', 'Technical Documentation', 'Presentation Templates']
                },
                {
                  icon: '/window.svg',
                  title: 'Source Code Access',
                  description: 'Well-documented source code with detailed setup instructions',
                  color: 'purple',
                  features: ['Clean Code Base', 'Setup Guidelines', 'Code Documentation']
                },
                {
                  icon: '/globe.svg',
                  title: 'Active Community',
                  description: 'Join a thriving community of students and developers',
                  color: 'pink',
                  features: ['Expert Support', 'Peer Reviews', 'Collaboration Tools']
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={
                    `relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 hover:scale-105 hover:shadow-3xl transition-all duration-300 ease-in-out group overflow-hidden flex flex-col`}
                  style={{ minHeight: '370px' }}
                >
                  {/* Accent Bar */}
                  <div className={`h-2 w-full ${featureAccent[feature.color]}`}></div>
                  <div className="relative z-10 space-y-4 flex-1 flex flex-col justify-between p-8">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${featureAccent[feature.color]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md mx-auto`}>
                      <Image 
                        src={feature.icon} 
                        alt={feature.title} 
                        width={32} 
                        height={32} 
                        className="transition-transform duration-300 group-hover:rotate-6"
                      />
                    </div>
                    {/* Title and Description */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    {/* Feature List */}
                    <ul className="space-y-2 mt-4">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 text-base">
                          <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Learn More Link */}
                    <div className="inline-flex items-center text-blue-600 text-base font-medium group/link cursor-pointer pt-2 hover:underline mt-4">
                      <span>Learn More</span>
                      <svg 
                        className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-md">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Join our community of students and developers today. Find or share your next project!
              </p>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 text-lg font-semibold">
                <span className="flex items-center gap-2 text-lg">
                  Start Exploring
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Page
