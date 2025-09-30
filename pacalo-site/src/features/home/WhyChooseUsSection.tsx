import type React from 'react'
import { PartnerLogo } from './components/PartnerComponents'

const WhyChooseUsSection: React.FC = () => {
  const partners = [
    { name: 'Fresenius Kidney Care', logo: '/assets/images/logos/fraseneus.png', url: 'https://www.freseniuskidneycare.com/' },
    { name: 'NetSpap', logo: '/assets/images/logos/netspap-bw.png', url: 'https://netspap.com/' },
    { name: 'OSF Healthcare', logo: '/assets/images/logos/osf.png', url: 'https://www.osfhealthcare.org/' }
  ]

  return (
    <section id="partner" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">Why Choose Us</h2>

        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4 mb-10 text-center">
          <p>We provide safe and reliable NEMT services to various medical centers and facilities in and around <strong>Central Illinois</strong>.</p>
          <p>We prioritize your health schedule, working closely with facilities to ensure <strong>regular, on–time appointments</strong> for all your transportation needs.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} href={partner.url} src={partner.logo} alt={partner.name} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-lg leading-relaxed space-y-3 mt-10 text-center">
          <p>We are the <strong>highest-rated NEMT service</strong> in Central Illinois, guaranteeing the <strong>best customer experience</strong>.</p>
          <p>Your transport is more than a ride; it's an experience built on <strong>dignity, comfort, and professional care</strong>. Read our outstanding customer reviews on Google to see why we are the top choice.</p>
          <div className="pt-4">
            <p className="mb-1">Add Google review below?</p>
            <a href="https://g.page/r/CfW0pd4CwkDbEAE/review" className="text-blue-600 underline">
              https://g.page/r/CfW0pd4CwkDbEAE/review
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
