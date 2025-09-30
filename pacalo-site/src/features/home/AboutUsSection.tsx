import type React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { ContactItem, ContactSection, AboutContent } from './components/ContactComponents'

const AboutUsSectionNew: React.FC = () => {
  return (
    <section
      id="about-us"
      className="py-20 bg-gradient-to-br from-pacalo-dark-blue via-blue-900 to-pacalo-dark-blue relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pacalo-gold/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* About Us Content - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <AboutContent title="About Us">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    <strong className="text-pacalo-gold">PACALO</strong> Transportation specializes in non-emergency medical transport, hospital
                    releases and more. We cover Mclean County and the rest of Central Illinois, providing door to door
                    service with no shared rides. As a Fully covered and certified Illinois medical provider, we serve
                    different clients including Medicaid, Private Insurance & Private pay.
                  </p>
                  <p>
                    If you or someone you love needs reliable transportation, we can help! Whether you need rides for routine scheduled appointments,
                    one time visits, events, fun casual trips, we can get you there safely.
                  </p>
                  <p className="text-pacalo-gold font-semibold">
                    <strong>Call us for a peace of mind!</strong>
                  </p>
                </div>
              </AboutContent>
            </div>
          </div>

          {/* Work with us - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full">
              <ContactSection
                title="Work with us"
                description="Questions on availability, rates, schedule? Send us a quick note or give us a call, we will promptly respond."
              >
                <div className="space-y-6">
                  <ContactItem
                    icon={<FaPhone />}
                    href="tel:3093074564"
                  >
                    (309) 307 4564
                  </ContactItem>

                  <ContactItem
                    icon={<FaEnvelope />}
                    href="mailto:ride@pacalo.net"
                  >
                    ride@pacalo.net
                  </ContactItem>

                  <ContactItem icon={<FaClock />}>
                    We are open Mon-Sun (24 Hours)
                  </ContactItem>
                </div>
              </ContactSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSectionNew