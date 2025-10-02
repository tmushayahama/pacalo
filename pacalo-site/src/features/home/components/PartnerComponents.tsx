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
    className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
  </a>
)