import type React from 'react'
import {
  Navigation,
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  AboutUsSection
} from '../features/home'
import Footer from '../features/home/Footer'
import BookingForm from '@/features/home/components/BookingForm'
import { getAssetPath } from '../utils/assets'
import FAQ from '@/features/home/components/FAQ'
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CertificationsSection from '@/features/home/CertificationsSection'
import FloatingActionButton from '@/features/home/components/FloatingActionButton'

const Home: React.FC = () => {
  return (
    <div className="font-roboto bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      {/*     <ContactRow /> */}
      <main className="relative space-y-0">
        <ServicesSection />
        <WhyChooseUsSection />
        <CertificationsSection />
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: (window.innerWidth >= 768)
                ? `url('${getAssetPath('/assets/images/homepage-bg-2.jpg')}')`
                : `url('${getAssetPath('/assets/images/homepage-bg-sm.jpg')}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/35" />
          <div className="relative container mx-auto sm:p-8 p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-1">
                <BookingForm />
              </div>
              <div className="order-2">
                <FAQ />
                <div className="mt-4 text-right">
                  <Link to="/faq" className="text-white font-semibold hover:underline">View all FAQs →</Link>
                </div>
              </div>

            </div>
            <div id="contact" className="mt-12 bg-pacalo-blue rounded-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-lg mb-6">
                Our team is here to help 24/7. Give us a call or send us an email.
              </p>
              {/* Contact Buttons Row at Bottom */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href="tel:3093074564"
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-500 transition-colors shadow-lg"
                  >
                    <FaPhone className="text-lg" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="https://wa.me/13093074564?text=Hello,%20I%20would%20like%20to%20book%20a%20medical%20transport%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="mailto:ride@pacalo.net"
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-white/80 font-bold rounded-xl hover:bg-white/50 transition-colors shadow-lg border border-white/20"
                  >
                    <FaEnvelope className="text-lg" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutUsSection />
      </main>
      <Footer />

      <FloatingActionButton />
    </div>
  )
}

export default Home