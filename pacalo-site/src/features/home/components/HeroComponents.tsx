import type React from 'react'

interface HeroSectionProps {
  mobileImage: string
  desktopImage: string
  title: React.ReactNode
  subtitle: React.ReactNode
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mobileImage, desktopImage, title, subtitle }) => (
  <div className="relative">
    {/* Desktop Hero */}
    <div
      className="hidden md:block h-[700px] bg-cover bg-center relative"
      style={{ backgroundImage: `url('${desktopImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="w-full max-w-3xl">
          <div className="bg-white/40 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl border border-white/60">
            <h1 className="text-gray-900 font-bold text-3xl lg:text-4xl leading-tight mb-6">
              {title}
            </h1>
            <p className="text-pacalo-dark-blue font-semibold text-lg lg:text-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Hero */}
    <div
      className="md:hidden h-96 bg-cover bg-center relative mt-16"
      style={{ backgroundImage: `url('${mobileImage}')`, backgroundPosition: 'right center' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="w-full text-center">
          <div className="bg-white/75 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20">
            <h1 className="text-gray-900 font-bold text-xl leading-tight mb-4">
              {title}
            </h1>
            <p className="text-pacalo-dark-blue font-semibold text-base">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const HighlightText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">{children}</span>
)