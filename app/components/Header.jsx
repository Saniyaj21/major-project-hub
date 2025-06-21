'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu')
      const mobileMenuButton = document.getElementById('mobile-menu-button')
      
      if (mobileMenu && mobileMenuButton && 
          !mobileMenu.contains(event.target) && 
          !mobileMenuButton.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            ProjectHub
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Projects
            </Link>
            <Link href="/mentorship" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Mentorship
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Get Started
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
              Book 1:1 Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu" 
          className={`md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="/mentorship"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Mentorship
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-2">
              <Link
                href="/contact"
                className="block px-3 py-2 text-blue-600 hover:text-blue-700 font-medium"
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                onClick={closeMobileMenu}
              >
                Book 1:1 Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header 