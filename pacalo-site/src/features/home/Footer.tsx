import type React from 'react'
import { FaStar } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <img
                src="/assets/images/logos/Transparent Logo.png"
                alt="PACALO Logo"
                className="h-12 mx-auto md:mx-0"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Professional non-emergency medical transportation services in Central Illinois.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-1 text-pacalo-gold">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4" />
              ))}
              <span className="ml-2 text-sm">Highest Rated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-300 hover:text-pacalo-gold transition-colors">Our Services</a></li>
                <li><a href="#partner" className="text-gray-300 hover:text-pacalo-gold transition-colors">Our Partners</a></li>
                <li><a href="#about-us" className="text-gray-300 hover:text-pacalo-gold transition-colors">About Us</a></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="text-xs text-gray-400 mb-1">Phone</div>
                <a href="tel:3093074564" className="text-lg font-semibold hover:text-pacalo-gold transition-colors">
                  (309) 307-4564
                </a>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Email</div>
                <a href="mailto:ride@pacalo.net" className="hover:text-pacalo-gold transition-colors break-all">
                  ride@pacalo.net
                </a>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Available</div>
                <div className="text-pacalo-gold font-bold">24/7 Service</div>
                <div className="text-xs text-gray-400">Monday - Sunday</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} PACALO Transportation. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Contact <span className="text-pacalo-gold font-bold">PACALO</span> for the right Transportation Experience.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer