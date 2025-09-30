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
  className = "h-12 w-auto"
}) => {
  return (
    <div className="flex-shrink-0 w-44">
      <img src={src} alt={alt} className={className} />
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
  className = "text-gray-800 hover:text-blue-600 font-semibold text-base transition-colors"
}) => {
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
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
  className = "flex items-center space-x-2 px-4 py-2 border border-pacalo-dark-blue text-pacalo-dark-blue rounded-xl font-bold text-xl transition-colors hover:bg-pacalo-dark-blue hover:text-white"
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
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
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