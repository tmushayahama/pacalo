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
import { FaPhone, FaEnvelope } from 'react-icons/fa'
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3093074564"
                  className="inline-flex items-center justify-center px-6 py-3 bg-pacalo-gold text-pacalo-blue font-bold rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <FaPhone className="mr-2" />
                  Call (309) 307-4564
                </a>
                <a
                  href="mailto:ride@pacalo.net"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-pacalo-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaEnvelope className="mr-2" />
                  Email Us
                </a>
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