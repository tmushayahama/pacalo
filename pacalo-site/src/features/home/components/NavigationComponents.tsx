import type React from 'react'
import { FaPhone } from 'react-icons/fa'

interface BrandLogoProps {
  src: string
  alt: string
  className?: string
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  src,
  alt,
  className = "h-14 w-auto"
}) => {
  return (
    <div className="flex-shrink-0">
      <img
        src={src}
        alt={alt}
        className={`${className} hover:scale-105 transition-transform duration-300`}
      />
    </div>
  )
}

interface NavigationLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  onClick,
  className = "text-gray-700 hover:text-pacalo-blue font-semibold text-base transition-all duration-300 hover:scale-105 relative group"
}) => {
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pacalo-blue to-pacalo-gold group-hover:w-full transition-all duration-300"></span>
    </a>
  )
}

interface PhoneButtonProps {
  phoneNumber: string
  displayNumber: string
  className?: string
}

export const PhoneButton: React.FC<PhoneButtonProps> = ({
  phoneNumber,
  displayNumber,
  className = "flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pacalo-blue to-blue-600 text-white rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
}) => {
  return (
    <a href={`tel:${phoneNumber}`} className={className}>
      <FaPhone className="text-sm" />
      <span>{displayNumber}</span>
    </a>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  children: React.ReactNode
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, children }) => {
  if (!isOpen) return null

  return (
    <div className="lg:hidden">
      <div className="px-2 pt-4 pb-6 space-y-3 bg-white border-t border-gray-200 shadow-lg">
        {children}
      </div>
    </div>
  )
}

interface MenuToggleProps {
  isOpen: boolean
  onToggle: () => void
  openIcon: React.ReactNode
  closeIcon: React.ReactNode
}

export const MenuToggle: React.FC<MenuToggleProps> = ({
  isOpen,
  onToggle,
  openIcon,
  closeIcon
}) => {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden text-gray-800 hover:text-blue-600 focus:outline-none transition-colors"
    >
      {isOpen ? closeIcon : openIcon}
    </button>
  )
}