import type React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

interface NavigationItem {
  href: string
  label: string
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems: NavigationItem[] = [
    { href: '#services', label: 'Services' },
    { href: '#partner', label: 'Our Partners' },
    { href: '#about-us', label: 'About Us' },
    { href: '#contact', label: 'Contact' }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/images/logos/Transparent Logo.png"
              alt="PACALO Logo"
              className="h-12 w-auto hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-pacalo-blue font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:3093074564"
              className="flex items-center space-x-2 px-4 py-2 bg-pacalo-blue text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              <FaPhone className="text-sm" />
              <span>309-307-4564</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 hover:text-blue-600 focus:outline-none transition-colors"
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-gray-700" />
            ) : (
              <FaBars size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 bg-white border-t border-gray-200 shadow-lg">
              <div className="py-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-gray-700 hover:text-pacalo-blue font-medium border-b border-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-4 py-4 bg-gray-50">
                  <a
                    href="tel:3093074564"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-pacalo-blue text-white rounded-lg font-bold w-full"
                  >
                    <FaPhone className="text-sm" />
                    <span>309-307-4564</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation