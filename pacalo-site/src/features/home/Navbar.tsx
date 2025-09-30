import type React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  BrandLogo,
  NavigationLink,
  PhoneButton,
  MobileMenu,
  MenuToggle
} from './components/NavigationComponents'

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <BrandLogo
            src="/assets/images/logos/Transparent Logo.png"
            alt="PACALO Logo"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <NavigationLink key={item.href} href={item.href}>
                {item.label}
              </NavigationLink>
            ))}
            <PhoneButton
              phoneNumber="3093074564"
              displayNumber="309-307-4564"
            />
          </div>

          {/* Mobile menu button */}
          <MenuToggle
            isOpen={isMenuOpen}
            onToggle={toggleMenu}
            openIcon={<FaBars size={24} className="text-gray-700" />}
            closeIcon={<FaTimes size={24} className="text-gray-700" />}
          />
        </div>

        {/* Mobile Navigation */}
        <MobileMenu isOpen={isMenuOpen}>
          {navigationItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block px-3 py-3 text-gray-800 hover:text-pacalo-blue font-semibold text-base transition-colors border-b border-gray-100 last:border-b-0"
            >
              {item.label}
            </NavigationLink>
          ))}
          <div className="px-3 mt-4">
            <PhoneButton
              phoneNumber="3093074564"
              displayNumber="309-307-4564"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pacalo-blue to-blue-600 text-white rounded-xl font-bold text-base transition-all duration-300 w-full justify-center"
            />
          </div>
        </MobileMenu>
      </div>
    </nav>
  )
}

export default Navigation