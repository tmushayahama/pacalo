import type React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import BookingBarForm from './components/BookingBarForm'
import CertificationsStrip from './components/CertificationsStrip'
interface HighlightTextProps {
  children: React.ReactNode
}

const HighlightText: React.FC<HighlightTextProps> = ({ children }) => (
  <span className="relative inline-block">
    <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pacalo-gold/50 to-blue-400/50 blur-sm"></span>
  </span>
)

const HeroSection: React.FC = () => (
  <div className="mt-16 md:mt-0">
    <div
      className="min-h-[60vh] md:min-h-[75vh] bg-cover bg-center relative"
      style={{
        backgroundImage: window.innerWidth >= 768
          ? `url('/assets/images/homepage-bg.jpg')`
          : `url('/assets/images/homepage-bg-sm.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-black/40 md:bg-black/50" />

      <div className="relative z-10 h-full min-h-[60vh] md:min-h-[75vh] container mx-auto px-4 flex items-end md:items-center pb-8 md:pb-0">
        <div className="w-full md:max-w-4xl">
          <div className="bg-white/45 md:bg-white/50 backdrop-blur-sm rounded-lg p-4 md:p-8 lg:p-10 shadow-lg">
            <h1 className="text-gray-900 font-bold text-xl md:text-4xl lg:text-5xl leading-tight mb-3 md:mb-4">
              We proudly offer top-tier <HighlightText>stretcher</HighlightText>,{' '}
              <HighlightText>wheelchair</HighlightText>, and{' '}
              <HighlightText>ambulatory transportation</HighlightText>.
            </h1>
            <p className="text-gray-700 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6">
              Need to go further? We provide comprehensive intercity, inter-county, and interstate services to ensure you get safely to any destination.
            </p>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4">
              <a
                href="tel:3093074564"
                className="flex md:inline-flex items-center justify-center px-4 md:px-6 py-3 bg-pacalo-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <div className="text-pacalo-gold text-2xl flex-shrink-0">
                  <FaPhone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                </div>
                <span className="md:hidden">Call Now</span>
                <span className="hidden md:inline">Call (309) 307-4564</span>
              </a>
              <a
                href="mailto:ride@pacalo.net"
                className="flex md:inline-flex items-center justify-center px-4 md:px-6 py-3 bg-pacalo-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <div className="text-pacalo-gold text-2xl flex-shrink-0">
                  <FaEnvelope className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                </div>
                <span className="md:hidden">Email Us</span>
                <span className="hidden md:inline">Email ride@pacalo.net</span>
              </a>
              <a
                href="#services"
                className="flex md:inline-flex items-center justify-center px-4 md:px-6 py-3 bg-white text-pacalo-blue font-bold rounded-lg border md:border-2 border-pacalo-blue hover:bg-blue-50 transition-colors"
              >
                <span className="md:hidden">View Services</span>
                <span className="hidden md:inline">Our Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CertificationsStrip />
    <BookingBarForm />
  </div>
)

export default HeroSection