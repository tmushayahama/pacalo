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
      description: 'Top-rated NEMT service in Central Illinois'
    },
    {
      icon: '/assets/images/icons/van.png',
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles with medical equipment'
    }
  ]

  return (
    <section id="partner" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose PACALO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands for reliable medical transportation
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-4">
              We provide safe and reliable NEMT services to medical centers throughout <strong>Central Illinois</strong>.
            </p>
            <p className="text-lg text-gray-700">
              We prioritize your health schedule and ensure <strong>on-time appointments</strong> for all transportation needs.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Partners</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <PartnerLogo href={partner.url} src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-pacalo-blue rounded-lg p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-pacalo-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Highest-Rated in Central Illinois
          </h3>
          <p className="text-lg mb-6">
            Read our outstanding customer reviews to see why we are the top choice for medical transportation.
          </p>
          <a
            href="https://g.page/r/CfW0pd4CwkDbEAE/review"
            className="inline-flex items-center px-6 py-3 bg-pacalo-gold hover:bg-yellow-500 text-pacalo-blue font-bold rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Write a Review
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
