import React from 'react'
import HeroSection from './components/home/HeroSection'
import FeaturesSection from './components/home/FeaturesSection'
import CTASection from './components/home/CTASection'

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-transparent">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  )
}

export default Page
