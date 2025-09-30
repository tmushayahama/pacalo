import type React from 'react'
import {
  Navigation,
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  AboutUsSection
} from '../features/home'
import ContactRow from '../features/home/ContactRow'
import Footer from '../features/home/Footer'
import CertificationsSection from '../features/home/CertificationsSection'

const Home: React.FC = () => {
  return (
    <div className="font-roboto bg-gray-50">
      <Navigation />
      <HeroSection />
      <ContactRow />
      <main>
        <ServicesSection />
        <CertificationsSection />
        <WhyChooseUsSection />
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home