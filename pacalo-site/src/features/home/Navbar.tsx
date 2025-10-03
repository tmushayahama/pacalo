import type React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

interface NavigationItem {
  href: string
  label: string
  isRoute?: boolean
}

const NavLink: React.FC<{ item: NavigationItem; className?: string; onClick?: () => void }> = ({
  item,
  className = '',
  onClick
}) => {
  if (item.isRoute) {
    return (
      <Link to={item.href} className={className} onClick={onClick}>
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pacalo-blue transition-all duration-200 group-hover:w-full"></span>
      </Link>
    )
  }

  return (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pacalo-blue transition-all duration-200 group-hover:w-full"></span>
    </a>
  )
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems: NavigationItem[] = [
    { href: '#services', label: 'Services' },
    { href: '/gallery', label: 'Gallery', isRoute: true },
    { href: '#partner', label: 'Our Partners' },
    { href: '#about-us', label: 'About Us' },
    { href: '#contact', label: 'Contact' }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/images/logos/Transparent Logo.png"
              alt="PACALO Logo"
              className="h-14 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                className="text-gray-700 hover:text-pacalo-blue font-semibold text-lg transition-all duration-200 relative group"
              />
            ))}
            <a
              href="tel:3093074564"
              className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pacalo-blue to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-pacalo-blue transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FaPhone className="text-lg" />
              <span className="text-lg">309-307-4564</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 hover:text-pacalo-blue focus:outline-none transition-all duration-200 p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <FaTimes size={28} className="text-gray-700" />
            ) : (
              <FaBars size={28} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-gray-700 hover:text-pacalo-blue hover:bg-blue-50 font-semibold text-lg rounded-lg transition-all duration-200"
                  />
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <a
                    href="tel:3093074564"
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-pacalo-blue to-blue-700 text-white rounded-xl font-bold w-full transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <FaPhone className="text-lg" />
                    <span className="text-lg">309-307-4564</span>
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