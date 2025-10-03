import type React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactRow: React.FC = () => {
  return (
    <div className="w-full bg-pacalo-blue text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Phone Card */}
          <a
            href="tel:3093074564"
            className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
          >
            <div className="text-pacalo-gold text-2xl flex-shrink-0">
              <FaPhone />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-pacalo-gold font-semibold mb-1 uppercase">
                Call Us
              </div>
              <div className="text-lg font-bold group-hover:text-pacalo-gold transition-colors">
                (309) 307-4564
              </div>
              <div className="text-xs text-gray-300">Available 24/7</div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:ride@pacalo.net"
            className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
          >
            <div className="text-pacalo-gold text-2xl flex-shrink-0">
              <FaEnvelope />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-pacalo-gold font-semibold mb-1 uppercase">
                Email Us
              </div>
              <div className="text-lg font-bold group-hover:text-pacalo-gold transition-colors break-all">
                ride@pacalo.net
              </div>
              <div className="text-xs text-gray-300">Quick Response</div>
            </div>
          </a>

          {/* Hours Card */}
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
            <div className="text-pacalo-gold text-2xl flex-shrink-0">
              <FaClock />
            </div>
            <div className="flex-1">
              <div className="text-xs text-pacalo-gold font-semibold mb-1 uppercase">
                Service Hours
              </div>
              <div className="text-lg font-bold">
                24/7 Service
              </div>
              <div className="text-xs text-gray-300">Monday - Sunday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactRow