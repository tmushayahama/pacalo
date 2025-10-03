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
      className="min-h-[60vh] md:min-h-[70vh] bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: window.innerWidth >= 768
          ? `url('/assets/images/homepage-bg.jpg')`
          : `url('/assets/images/homepage-bg-sm.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/30" />

      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <h1 className="text-gray-900 font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4">
              We proudly offer top-tier <HighlightText>stretcher</HighlightText>,{' '}
              <HighlightText>wheelchair</HighlightText>, and{' '}
              <HighlightText>ambulatory transportation</HighlightText>.
            </h1>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
              Need to go further? We provide comprehensive intercity, inter-county, and interstate services to ensure you get safely to any destination.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a
                href="tel:3093074564"
                className="flex items-center justify-center px-4 py-3 bg-pacalo-blue text-white font-bold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaPhone className="w-4 h-4 mr-2 text-pacalo-gold" />
                <span className="hidden sm:inline">Call (309) 307-4564</span>
                <span className="sm:hidden">Call Now</span>
              </a>
              <a
                href="mailto:ride@pacalo.net"
                className="flex items-center justify-center px-4 py-3 bg-pacalo-gold text-white font-bold rounded-xl hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaEnvelope className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Email Us</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a
                href="#services"
                className="flex items-center justify-center px-4 py-3 bg-white text-pacalo-blue font-bold rounded-xl border-2 border-pacalo-blue hover:bg-pacalo-blue hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Our Services</span>
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