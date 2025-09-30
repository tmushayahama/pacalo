import type React from 'react'

interface HeroSectionProps {
  mobileImage: string
  desktopImage: string
  title: React.ReactNode
  subtitle: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mobileImage, desktopImage, title, subtitle }) => (
  <div
    className="relative h-80 md:h-[600px] bg-cover bg-center"
    style={{ backgroundImage: `url('${desktopImage}')` }}
  >
    <div
      className="absolute inset-0 md:hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${mobileImage}')`, backgroundPosition: 'right center' }}
    />
    <div className="absolute inset-0 bg-black bg-opacity-20" />
    <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
      <div className="w-full md:w-2/3 pt-20 md:pt-24 text-center md:text-left">
        <h1 className="text-white font-bold text-lg md:text-2xl leading-relaxed mb-4">
          {title}
        </h1>
        <h4 className="text-yellow-400 font-bold text-sm md:text-base">
          {subtitle}
        </h4>
      </div>
    </div>
  </div>
)

export const HighlightText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="text-2xl md:text-4xl font-bold text-yellow-400">{children}</strong>
)