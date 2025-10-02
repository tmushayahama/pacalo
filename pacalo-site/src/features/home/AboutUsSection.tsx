import type React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const AboutUsSectionNew: React.FC = () => {
  return (
    <section id="about-us" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* About Us Content - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 rounded-lg p-8">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
                <div className="w-20 h-1 bg-pacalo-gold rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  <strong className="text-pacalo-gold">PACALO Transportation</strong> specializes in non-emergency medical transport, hospital releases and more. We cover McLean County and Central Illinois, providing door-to-door service with no shared rides.
                </p>
                <p>
                  As a fully covered and certified Illinois medical provider, we serve different clients including Medicaid, Private Insurance & Private pay.
                </p>
                <p>
                  If you or someone you love needs reliable transportation, we can help! Whether you need rides for routine appointments, one-time visits, or events, we can get you there safely.
                </p>
                <p className="text-pacalo-gold font-bold text-xl">
                  Call us for peace of mind!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 rounded-lg p-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  Questions about availability, rates, or scheduling? Send us a note or give us a call.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:3093074564"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="text-pacalo-gold text-2xl flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-300 mb-1">Call Us Anytime</span>
                    <span className="text-lg font-bold">(309) 307-4564</span>
                  </div>
                </a>

                <a
                  href="mailto:ride@pacalo.net"
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="text-pacalo-gold text-2xl flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-300 mb-1">Email Us</span>
                    <span className="text-lg font-bold break-all">ride@pacalo.net</span>
                  </div>
                </a>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="text-pacalo-gold text-2xl flex-shrink-0">
                      <FaClock />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-300 mb-1">Service Hours</span>
                      <span className="text-lg font-bold text-pacalo-gold">24/7 Available</span>
                      <span className="text-sm text-gray-400 block">Monday - Sunday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSectionNew