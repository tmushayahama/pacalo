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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <BrandLogo
            src="/assets/images/logos/Transparent Logo.png"
            alt="PACALO Logo"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
            openIcon={<FaBars size={24} />}
            closeIcon={<FaTimes size={24} />}
          />
        </div>

        {/* Mobile Navigation */}
        <MobileMenu isOpen={isMenuOpen}>
          {navigationItems.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-semibold text-base transition-colors"
            >
              {item.label}
            </NavigationLink>
          ))}
          <div className="px-3 mt-2">
            <PhoneButton
              phoneNumber="3093074564"
              displayNumber="309-307-4564"
              className="flex items-center space-x-2 px-4 py-2 border border-pacalo-dark-blue text-pacalo-dark-blue rounded-xl font-bold text-xl transition-colors hover:bg-pacalo-dark-blue hover:text-white w-full justify-center"
            />
          </div>
        </MobileMenu>
      </div>
    </nav>
  )
}

export default Navigation