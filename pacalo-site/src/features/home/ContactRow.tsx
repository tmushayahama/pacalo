import type React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactRow: React.FC = () => {
  return (
    <div className="w-full bg-pacalo-blue text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div className="text-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <div className="text-pacalo-gold text-3xl mb-3 flex justify-center">
              <FaPhone />
            </div>
            <h6 className="text-pacalo-gold font-bold mb-2 text-sm uppercase">
              Call Us
            </h6>
            <a
              href="tel:3093074564"
              className="text-white font-bold text-xl hover:text-pacalo-gold transition-colors block"
            >
              (309) 307-4564
            </a>
            <div className="mt-2 text-gray-300 text-sm">Available 24/7</div>
          </div>

          {/* Email Card */}
          <div className="text-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <div className="text-pacalo-gold text-3xl mb-3 flex justify-center">
              <FaEnvelope />
            </div>
            <h6 className="text-pacalo-gold font-bold mb-2 text-sm uppercase">
              Email Us
            </h6>
            <a
              href="mailto:ride@pacalo.net"
              className="text-white font-bold text-lg hover:text-pacalo-gold transition-colors break-all block"
            >
              ride@pacalo.net
            </a>
            <div className="mt-2 text-gray-300 text-sm">Quick Response</div>
          </div>

          {/* Hours Card */}
          <div className="text-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <div className="text-pacalo-gold text-3xl mb-3 flex justify-center">
              <FaClock />
            </div>
            <h6 className="text-pacalo-gold font-bold mb-2 text-sm uppercase">
              Operating Hours
            </h6>
            <p className="text-white font-bold text-xl">
              24/7 Service
            </p>
            <div className="mt-2 text-gray-300 text-sm">Monday - Sunday</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactRow