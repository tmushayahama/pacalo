import type React from 'react'

interface PartnerLogoProps {
  href: string
  src: string
  alt: string
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({ href, src, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-16 object-contain filter hover:filter-none transition-all duration-300"
    />
  </a>
)