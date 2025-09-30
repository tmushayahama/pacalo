import type React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactRow: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pacalo-dark-blue via-blue-800 to-pacalo-dark-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="text-pacalo-gold text-4xl mb-4 flex justify-center">
              <FaPhone />
            </div>
            <h6 className="text-pacalo-gold font-semibold mb-2 text-sm uppercase tracking-wide">
              Have a question? Call Us
            </h6>
            <a
              href="tel:3093074564"
              className="text-white font-bold text-xl hover:text-pacalo-gold transition-colors duration-300"
            >
              (309) 307-4564
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="text-pacalo-gold text-4xl mb-4 flex justify-center">
              <FaEnvelope />
            </div>
            <h6 className="text-pacalo-gold font-semibold mb-2 text-sm uppercase tracking-wide">
              Drop us an e-mail
            </h6>
            <a
              href="mailto:ride@pacalo.net"
              className="text-white font-bold text-xl hover:text-pacalo-gold transition-colors duration-300"
            >
              ride@pacalo.net
            </a>
          </div>

          {/* Hours Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="text-pacalo-gold text-4xl mb-4 flex justify-center">
              <FaClock />
            </div>
            <h6 className="text-pacalo-gold font-semibold mb-2 text-sm uppercase tracking-wide">
              Operating Hours
            </h6>
            <p className="text-white font-bold text-xl">
              24/7 Service
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Mon-Sun Available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactRow