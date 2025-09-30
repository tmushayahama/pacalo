import type React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
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
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional non-emergency medical transportation services in Central Illinois.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-pacalo-gold transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#partner" className="text-gray-300 hover:text-pacalo-gold transition-colors">
                    Our Partners
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="text-gray-300 hover:text-pacalo-gold transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>
                <a href="tel:3093074564" className="hover:text-pacalo-gold transition-colors">
                  (309) 307-4564
                </a>
              </p>
              <p>
                <a href="mailto:ride@pacalo.net" className="hover:text-pacalo-gold transition-colors">
                  ride@pacalo.net
                </a>
              </p>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} PACALO Transportation. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Contact{' '}
              <span className="text-pacalo-gold font-semibold">
                PACALO
              </span>{' '}
              for the right Transportation Experience.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer