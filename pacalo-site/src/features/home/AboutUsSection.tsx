import type React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { ContactItem, ContactSection, AboutContent } from './components/ContactComponents'

const AboutUsSectionNew: React.FC = () => {
  return (
    <section
      id="about-us"
      className="py-16 bg-pacalo-dark-blue text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Content - Left Side */}
          <div className="md:col-span-2 text-center md:text-left">
            <AboutContent title="About Us">
              <p>
                <strong>PACALO</strong> Transportation specializes in non-emergency medical transport, hospital
                releases and more. We cover Mclean County and the rest of Central Illinois, providing door to door
                service with no shared rides. As a Fully covered and certified Illinois medical provider, we serve
                different clients including Medicaid, Private Insurance & Private pay.
              </p>
              <p>
                If you or someone you love needs reliable transportation, we can help! Whether you need rides for routine scheduled appointments,
                one time visits, events, fun casual trips, we can get you there safely.
              </p>
              <p>
                <strong>Call us for a peace of mind!</strong>
              </p>
            </AboutContent>
          </div>

          {/* Work with us - Right Side */}
          <div className="text-center md:text-right">
            <ContactSection
              title="Work with us"
              description="Questions on availability, rates, schedule? Send us a quick note or give us a call, we will promptly respond."
            >
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
            </ContactSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSectionNew