import type React from 'react'

interface PartnerLogoProps {
  href: string
  src: string
  alt: string
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <img src={src} alt={alt} className="w-full h-auto object-contain" />
  </a>
)