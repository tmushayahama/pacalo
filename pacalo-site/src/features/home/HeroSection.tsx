import type React from 'react'
import { FaPhone } from 'react-icons/fa'

const HeroSection: React.FC = () => (
  <div className="mt-16 md:mt-0">
    <div className="relative">
      {/* Desktop Hero */}
      <div
        className="hidden md:block min-h-[75vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url('/assets/images/homepage-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full min-h-[75vh] container mx-auto px-4 flex items-center">
          <div className="w-full max-w-4xl">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 lg:p-10 shadow-lg">
              <h1 className="text-gray-900 font-bold text-4xl lg:text-5xl leading-tight mb-4">
                We proudly offer top-tier{' '}
                <span className="relative inline-block">
                  <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">stretcher</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pacalo-gold/50 to-blue-400/50 blur-sm"></span>
                </span>,{' '}
                <span className="relative inline-block">
                  <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">wheelchair</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pacalo-gold/50 to-blue-400/50 blur-sm"></span>
                </span>, and{' '}
                <span className="relative inline-block">
                  <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">ambulatory transportation</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pacalo-gold/50 to-blue-400/50 blur-sm"></span>
                </span>.
              </h1>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-6">
                Need to go further? We provide comprehensive intercity, inter-county, and interstate services to ensure you get safely to any destination.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:3093074564"
                  className="inline-flex items-center px-6 py-3 bg-pacalo-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaPhone className="w-5 h-5 mr-2" />
                  Call (309) 307-4564
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 bg-white text-pacalo-blue font-bold rounded-lg border-2 border-pacalo-blue hover:bg-blue-50 transition-colors"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero */}
      <div
        className="md:hidden min-h-[60vh] bg-cover bg-center relative mt-16"
        style={{ backgroundImage: `url('/assets/images/homepage-bg-sm.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full min-h-[60vh] container mx-auto px-4 flex items-end pb-8">
          <div className="w-full">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
              <h1 className="text-gray-900 font-bold text-xl leading-tight mb-3">
                We proudly offer top-tier{' '}
                <span className="relative inline-block">
                  <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">stretcher</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pacalo-gold/50 to-blue-400/50 blur-sm"></span>
                </span>,{' '}
                <span className="relative inline-block">
                  <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">wheelchair</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pacalo-gold/50 to-blue-400/50 blur-sm"></span>
                </span>, and{' '}
                <span className="relative inline-block">
                  <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">ambulatory transportation</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pacalo-gold/50 to-blue-400/50 blur-sm"></span>
                </span>.
              </h1>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Need to go further? We provide comprehensive intercity, inter-county, and interstate services to ensure you get safely to any destination.
              </p>

              <div className="space-y-2">
                <a
                  href="tel:3093074564"
                  className="flex items-center justify-center px-4 py-3 bg-pacalo-blue text-white font-bold rounded-lg w-full"
                >
                  <FaPhone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href="#services"
                  className="flex items-center justify-center px-4 py-3 bg-white text-pacalo-blue font-bold rounded-lg w-full border border-pacalo-blue"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HeroSection