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
import ReviewsCarousel from '@/features/reviews/components/ReviewsCarousel'
import BookingForm from '@/features/home/components/BookingForm'
import ReviewsStripCarousel from '@/features/reviews/components/ReviewStripCarousel'
import FAQ from '@/features/home/components/FAQ'

const Home: React.FC = () => {
  return (
    <div className="font-roboto bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ReviewsStripCarousel />
      <ContactRow />
      <main className="relative">
        <ServicesSection />
        <CertificationsSection />
        <WhyChooseUsSection />
        <BookingForm />
        <ReviewsCarousel />
        <FAQ />
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home