import type React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const AboutUsSectionNew: React.FC = () => {
  return (
    <section id="about-us" className="py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-pacalo-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* About Us Content - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About Us</h2>
                <div className="w-24 h-2 bg-gradient-to-r from-pacalo-gold to-yellow-400 rounded-full"></div>
              </div>

              <div className="space-y-8 text-lg lg:text-xl leading-relaxed">
                <p className="text-gray-100">
                  <strong className="text-pacalo-gold text-xl">PACALO Transportation</strong> specializes in non-emergency medical transport, hospital releases and more. We cover McLean County and Central Illinois, providing door-to-door service with no shared rides.
                </p>
                <p className="text-gray-200">
                  As a fully covered and certified Illinois medical provider, we serve different clients including Medicaid, Private Insurance & Private pay.
                </p>
                <p className="text-gray-200">
                  If you or someone you love needs reliable transportation, we can help! Whether you need rides for routine appointments, one-time visits, or events, we can get you there safely.
                </p>
                <div className="bg-gradient-to-r from-pacalo-gold/20 to-yellow-400/20 rounded-2xl p-6 border border-pacalo-gold/30">
                  <p className="text-pacalo-gold font-bold text-2xl lg:text-3xl text-center">
                    Call us for peace of mind!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Questions about availability, rates, or scheduling? Send us a note or give us a call.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:3093074564"
                  className="flex items-center space-x-4 p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/10"
                >
                  <div className="text-pacalo-gold text-3xl flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-300 mb-2">Call Us Anytime</span>
                    <span className="text-xl font-bold">(309) 307-4564</span>
                  </div>
                </a>

                <a
                  href="mailto:ride@pacalo.net"
                  className="flex items-center space-x-4 p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/10"
                >
                  <div className="text-pacalo-gold text-3xl flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-300 mb-2">Email Us</span>
                    <span className="text-xl font-bold break-all">ride@pacalo.net</span>
                  </div>
                </a>

                <div className="bg-gradient-to-br from-pacalo-gold/20 to-yellow-400/20 rounded-2xl p-6 border border-pacalo-gold/30 shadow-lg">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                    <div className="text-pacalo-gold text-3xl flex-shrink-0">
                      <FaClock />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-300 mb-2">Service Hours</span>
                      <span className="text-xl font-bold text-pacalo-gold">24/7 Available</span>
                      <span className="text-sm text-gray-400 block mt-1">Monday - Sunday</span>
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