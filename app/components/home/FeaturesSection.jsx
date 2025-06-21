import React from 'react'
import FeatureCard from './FeatureCard'

const FeaturesSection = () => {
  const features = [
    {
      icon: '/file.svg',
      title: 'Complete Project Templates',
      description: 'Access professionally built project templates with full source code, documentation, and presentation materials.',
      color: 'blue',
      features: ['Ready-to-use Source Code', 'Technical Documentation', 'Project Reports & PPT', 'Setup Instructions']
    },
    {
      icon: '/window.svg',
      title: '1:1 Expert Mentorship',
      description: 'Get personalized guidance from industry experts to build your project step by step.',
      color: 'purple',
      features: ['Personalized Sessions', 'Code Review & Optimization', 'Best Practices Training', 'Career Guidance']
    },
    {
      icon: '/globe.svg',
      title: 'Industry-Ready Skills',
      description: 'Learn modern technologies and industry best practices used in real-world development.',
      color: 'pink',
      features: ['MERN Stack Development', 'Next.js & React', 'Database Design', 'Deployment & DevOps']
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-visible">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute left-0 top-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-x-1/2"></div>
        <div className="absolute right-0 bottom-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-50 rounded-full blur-3xl opacity-30 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3 drop-shadow-md">
            Why Choose Our Platform?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to build an impressive final year project that stands out and helps you land your dream job.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 