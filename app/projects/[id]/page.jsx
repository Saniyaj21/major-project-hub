import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Mock data for project details - replace with actual data from database
const getProjectDetails = (id) => {
  const projects = {
    1: {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution designed for modern online businesses. This project includes a complete shopping experience with secure payment processing, user authentication, inventory management, and an intuitive admin dashboard.",
      longDescription: `This E-Commerce Platform is a complete solution for online businesses looking to establish a professional web presence. Built with modern technologies and best practices, it provides everything needed to run a successful online store.

Key Features:
• User authentication and profile management
• Product catalog with categories and search
• Shopping cart and wishlist functionality
• Secure payment processing with Stripe
• Order management and tracking
• Admin dashboard for store management
• Responsive design for all devices
• SEO optimization
• Email notifications
• Analytics and reporting

The project includes comprehensive documentation, setup instructions, and deployment guides to help you get started quickly.`,
      image: "/project-ecommerce.jpg",
      price: 299,
      originalPrice: 399,
      category: "E-Commerce",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT", "Multer"],
      rating: 4.8,
      downloads: 156,
      reviews: 23,
      isNew: true,
      features: [
        "User Authentication & Authorization",
        "Product Management System",
        "Shopping Cart & Checkout",
        "Payment Integration (Stripe)",
        "Order Management",
        "Admin Dashboard",
        "Email Notifications",
        "Search & Filtering",
        "Responsive Design",
        "RESTful API"
      ],
      screenshots: [
        "/screenshot-1.jpg",
        "/screenshot-2.jpg",
        "/screenshot-3.jpg",
        "/screenshot-4.jpg"
      ],
      included: [
        "Complete Source Code",
        "Database Schema",
        "API Documentation",
        "Setup Instructions",
        "Deployment Guide",
        "Project Report (PDF)",
        "Presentation Slides (PPT)",
        "Video Tutorials",
        "6 Months Support"
      ],
      requirements: [
        "Node.js 16+",
        "MongoDB 5+",
        "Stripe Account",
        "Basic JavaScript Knowledge"
      ]
    }
  }
  return projects[id] || null
}

const ProjectDetailPage = ({ params }) => {
  const project = getProjectDetails(params.id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 flex-wrap">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/projects" className="hover:text-blue-600">Projects</Link></li>
            <li>/</li>
            <li className="text-gray-800">{project.title}</li>
          </ol>
        </nav>

        {/* Project Header */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Project Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              
              {/* NEW Badge */}
              {project.isNew && (
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-sm opacity-75 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg border border-white/20 backdrop-blur-sm">
                      <span className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                        NEW
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-semibold text-gray-700">
                ₹{project.price}
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium mb-3">
                {project.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Rating and Stats */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(project.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-sm sm:text-base">{project.rating}</span>
                <span className="text-gray-500 text-xs sm:text-sm">({project.reviews} reviews)</span>
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">
                {project.downloads} downloads
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">₹{project.price}</span>
                {project.originalPrice && (
                  <span className="text-base sm:text-lg text-gray-500 line-through">₹{project.originalPrice}</span>
                )}
                {project.originalPrice && (
                  <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 py-1 rounded-full font-medium">
                    {Math.round(((project.originalPrice - project.price) / project.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Purchase Now
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Tabs */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {['Overview', 'Features', 'Screenshots', 'What\'s Included', 'Requirements'].map((tab, index) => (
                <button
                  key={tab}
                  className={`px-4 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm border-b-2 transition-colors whitespace-nowrap ${
                    index === 0 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 sm:p-8">
            {/* Overview Tab Content */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Project Overview</h3>
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-sm sm:text-base">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-24 sm:h-32 mb-4"></div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Related Project {i}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">Brief description of related project...</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-600 text-sm sm:text-base">₹199</span>
                  <Link href={`/projects/${i}`} className="text-blue-600 hover:underline text-xs sm:text-sm">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetailPage 