import type React from 'react'
import { PartnerLogo } from './components/PartnerComponents'

const WhyChooseUsSection: React.FC = () => {
  const partners = [
    { name: 'Fresenius Kidney Care', logo: '/assets/images/logos/fraseneus.png', url: 'https://www.freseniuskidneycare.com/' },
    { name: 'NetSpap', logo: '/assets/images/logos/netspap-bw.png', url: 'https://netspap.com/' },
    { name: 'OSF Healthcare', logo: '/assets/images/logos/osf.png', url: 'https://www.osfhealthcare.org/' }
  ]

  const features = [
    {
      icon: '/assets/images/icons/time.png',
      title: 'Always On Time',
      description: 'Regular, punctual appointments that respect your health schedule'
    },
    {
      icon: '/assets/images/icons/shield.png',
      title: 'Safe & Reliable',
      description: 'Professional drivers with comprehensive safety training'
    },
    {
      icon: '/assets/images/icons/stars.png',
      title: 'Highest Rated',
      description: 'Top-rated NEMT service in Central Illinois with outstanding reviews'
    },
    {
      icon: '/assets/images/icons/van.png',
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles with specialized medical equipment'
    }
  ]

  return (
    <section id="partner" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pacalo-gold/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text mb-4">
            What Makes Us The Best!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pacalo-blue to-pacalo-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands trust us for their medical transportation needs
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-pacalo-blue/10 to-blue-100/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-lg font-bold text-pacalo-dark-blue mb-2 group-hover:text-pacalo-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 text-center text-gray-700">
            <p>We provide safe and reliable NEMT services to various medical centers and facilities in and around <strong className="text-pacalo-dark-blue">Central Illinois</strong>.</p>
            <p>We prioritize your health schedule, working closely with facilities to ensure <strong className="text-pacalo-dark-blue">regular, on–time appointments</strong> for all your transportation needs.</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-pacalo-dark-blue mb-8">Our Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <PartnerLogo href={partner.url} src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-pacalo-dark-blue to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-pacalo-gold/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full translate-y-16 -translate-x-16"></div>

          <div className="max-w-5xl mx-auto text-lg leading-relaxed space-y-6 text-center relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-pacalo-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p>We are the <strong className="text-pacalo-gold">highest-rated NEMT service</strong> in Central Illinois, guaranteeing the <strong className="text-pacalo-gold">best customer experience</strong>.</p>
            <p>Your transport is more than a ride; it's an experience built on <strong className="text-pacalo-gold">dignity, comfort, and professional care</strong>. Read our outstanding customer reviews on Google to see why we are the top choice.</p>
            <div className="pt-6">
              <p className="mb-4 text-gray-200">Leave us a review and help others discover our service:</p>
              <a
                href="https://g.page/r/CfW0pd4CwkDbEAE/review"
                className="inline-flex items-center px-8 py-4 bg-pacalo-gold hover:bg-yellow-500 text-pacalo-dark-blue font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Write a Google Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
