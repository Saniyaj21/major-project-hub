'use client'
import React, { useState, useMemo } from 'react'
import ProjectsGrid from '../components/projects/ProjectsGrid'

// Mock data for projects - replace with actual data from database
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center",
    price: 299,
    category: "E-Commerce",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    rating: 4.8,
    downloads: 156,
    isNew: true,
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&crop=center",
    price: 199,
    category: "Productivity",
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],
    rating: 4.6,
    downloads: 89,
    isNew: false,
    featured: false
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
    price: 399,
    category: "Analytics",
    techStack: ["React", "Express", "PostgreSQL", "Chart.js"],
    rating: 4.9,
    downloads: 234,
    isNew: true,
    featured: true
  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Complete LMS with course creation, student management, and progress tracking.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&crop=center",
    price: 499,
    category: "Education",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    rating: 4.7,
    downloads: 167,
    isNew: false,
    featured: false
  },
  {
    id: 5,
    title: "Restaurant Ordering System",
    description: "Online food ordering platform with menu management and delivery tracking.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=200&fit=crop&crop=center",
    price: 349,
    category: "Food & Beverage",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    rating: 4.5,
    downloads: 123,
    isNew: false,
    featured: false
  },
  {
    id: 6,
    title: "Real Estate Portal",
    description: "Property listing and management system with advanced search and filtering.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop&crop=center",
    price: 449,
    category: "Real Estate",
    techStack: ["Next.js", "Supabase", "Mapbox", "Stripe"],
    rating: 4.8,
    downloads: 198,
    isNew: true,
    featured: false
  },
  {
    id: 7,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform for patient management and appointment scheduling.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop&crop=center",
    price: 599,
    category: "Healthcare",
    techStack: ["React", "Node.js", "MySQL", "JWT"],
    rating: 4.9,
    downloads: 145,
    isNew: false,
    featured: true
  },
  {
    id: 8,
    title: "Inventory Management System",
    description: "Complete inventory tracking solution with barcode scanning and reporting.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&crop=center",
    price: 299,
    category: "Business",
    techStack: ["Next.js", "MongoDB", "Express", "Socket.io"],
    rating: 4.4,
    downloads: 78,
    isNew: false,
    featured: false
  }
]

const categories = ["All", "E-Commerce", "Productivity", "Analytics", "Education", "Food & Beverage", "Real Estate", "Healthcare", "Business"]

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('newest')

  // Filter and search functionality
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      
      return matchesSearch && matchesCategory
    }).sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.isNew - a.isNew
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'downloads':
          return b.downloads - a.downloads
        default:
          return 0
      }
    })
  }, [searchTerm, selectedCategory, sortBy])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('All')
    setSortBy('newest')
  }

  const hasActiveFilters = searchTerm || selectedCategory !== 'All' || sortBy !== 'newest'

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Explore Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover professionally built projects with complete documentation, source code, and presentation materials.
          </p>
        </div>

        {/* Compact Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Projects</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title or description..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="downloads">Downloads</option>
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <div className="mt-4 text-right">
              <button
                onClick={clearFilters}
                className="inline-block px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <ProjectsGrid projects={filteredProjects} />
      </div>
    </main>
  )
}

export default ProjectsPage 