import React from 'react'
import Link from 'next/link'
import MentorshipHero from '@/components/mentorship/MentorshipHero'
import MentorshipAbout from '@/components/mentorship/MentorshipAbout'
import MentorshipServices from '@/components/mentorship/MentorshipServices'
import MentorshipPackages from '@/components/mentorship/MentorshipPackages'

const services = [
  {
    title: "Project Planning & Architecture",
    description: "Get expert guidance on project structure, technology selection, and system architecture design.",
    icon: "🏗️",
    features: [
      "Technology stack recommendations",
      "Database design and optimization",
      "API architecture planning",
      "Scalability considerations"
    ]
  },
  {
    title: "Development Mentorship",
    description: "One-on-one coding sessions to help you build your project step by step.",
    icon: "💻",
    features: [
      "Code review and optimization",
      "Best practices implementation",
      "Debugging and problem solving",
      "Performance optimization"
    ]
  },
  {
    title: "Documentation & Presentation",
    description: "Professional documentation templates and presentation guidance for your final submission.",
    icon: "📋",
    features: [
      "Project report templates",
      "Technical documentation",
      "Presentation slides design",
      "Demo preparation"
    ]
  }
]

const packages = [
  {
    name: "Basic Package",
    price: 99,
    duration: "2 weeks",
    description: "Perfect for students who need initial guidance and planning.",
    features: [
      "2 hours of consultation",
      "Project planning session",
      "Technology stack guidance",
      "Basic documentation template",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Standard Package",
    price: 199,
    duration: "4 weeks",
    description: "Comprehensive mentorship for complete project development.",
    features: [
      "8 hours of consultation",
      "Weekly progress reviews",
      "Code review sessions",
      "Complete documentation",
      "Presentation preparation",
      "Priority email support",
      "1 month post-submission support"
    ],
    popular: true
  },
  {
    name: "Premium Package",
    price: 399,
    duration: "6 weeks",
    description: "Full-service mentorship with ongoing support throughout your project.",
    features: [
      "16 hours of consultation",
      "Bi-weekly progress reviews",
      "Advanced code optimization",
      "Complete documentation & PPT",
      "Demo preparation & practice",
      "24/7 priority support",
      "3 months post-submission support",
      "Resume enhancement guidance"
    ],
    popular: false
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    university: "MIT",
    project: "E-Commerce Platform",
    rating: 5,
    text: "The mentorship was incredible! I went from having no idea about full-stack development to building a complete e-commerce platform. The guidance was clear, practical, and helped me understand not just how to code, but why we make certain architectural decisions."
  },
  {
    name: "Michael Chen",
    university: "Stanford",
    project: "Task Management App",
    rating: 5,
    text: "Working with the mentor transformed my project experience. The step-by-step guidance helped me build a professional-grade application that impressed my professors and helped me secure a great internship."
  },
  {
    name: "Emily Rodriguez",
    university: "UC Berkeley",
    project: "Learning Management System",
    rating: 5,
    text: "The mentorship package was worth every penny. I learned industry best practices, got help with complex features, and ended up with a project that exceeded my expectations. Highly recommended!"
  }
]

const MentorshipPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <MentorshipHero />
        <MentorshipAbout />
        <MentorshipServices services={services} />
        <MentorshipPackages packages={packages} />
      </div>
    </main>
  )
}

export default MentorshipPage 