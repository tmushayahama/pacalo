import type React from 'react'
import { HeroSection as Hero, HighlightText } from './components/HeroComponents'

const HeroSection: React.FC = () => (
  <div className="mt-16 md:mt-0">
    <Hero
      mobileImage="/assets/images/mobile_background.jpg"
      desktopImage="/assets/images/homepage_photo.jpg"
      title={
        <>
          We proudly offer top-tier <HighlightText>stretcher</HighlightText>,{' '}
          <HighlightText>wheelchair</HighlightText>, and <HighlightText>ambulatory transportation</HighlightText>.
        </>
      }
      subtitle="Need to go further? We provide comprehensive intercity, inter-county, and interstate services to ensure you get safely to any destination."
    />
  </div>
)

export default HeroSection