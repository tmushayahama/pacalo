import type React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../../utils/assets'

const WhyChooseUsSection: React.FC = () => {
  const partners = [
    { name: 'Fresenius Kidney Care', logo: getAssetPath('/assets/images/logos/fraseneus.png'), url: 'https://www.freseniuskidneycare.com/' },
    { name: 'NetSpap', logo: getAssetPath('/assets/images/logos/netspap-bw.png'), url: 'https://netspap.com/' },
    { name: 'OSF Healthcare', logo: getAssetPath('/assets/images/logos/osf.png'), url: 'https://www.osfhealthcare.org/' }
  ]

  const features = [
    {
      icon: getAssetPath('/assets/images/icons/time.png'),
      title: 'Always On Time',
      description: 'Regular, punctual appointments that respect your health schedule'
    },
    {
      icon: getAssetPath('/assets/images/icons/shield.png'),
      title: 'Safe & Reliable',
      description: 'Professional drivers with comprehensive safety training'
    },
    {
      icon: getAssetPath('/assets/images/icons/stars.png'),
      title: 'Highest Rated',
      description: 'Top-rated NEMT service in Central Illinois'
    },
    {
      icon: getAssetPath('/assets/images/icons/van.png'),
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles with medical equipment'
    }
  ]

  return (
    <section id="partner" className="py-20 lg:py-12 bg-gradient-to-br from-white via-blue-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose PACALO
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands for reliable medical transportation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pacalo-blue to-pacalo-gold mx-auto mt-8"></div>
        </div>

        {/* Feature Grid - Horizontal on mobile, grid on larger screens */}
        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6 xl:gap-8 mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-4 lg:p-8 hover:bg-gradient-to-br hover:from-pacalo-blue hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl lg:transform lg:hover:-translate-y-2 border border-gray-100 flex lg:flex-col items-center lg:items-stretch gap-4 lg:gap-0 h-full">
                <div className="w-16 h-16 lg:w-20 lg:h-20 lg:mx-auto lg:mb-6 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-pacalo-blue to-blue-700 group-hover:from-white group-hover:to-gray-100 rounded-2xl shadow-lg transition-all duration-300">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
                </div>
                <div className="flex-1 lg:text-center">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-white mb-2 lg:mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pacalo-blue/10 via-white to-pacalo-gold/10 rounded-3xl p-6 lg:p-12 mb-16 lg:mb-20 border border-gray-200 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base lg:text-xl text-gray-700 mb-4 lg:mb-6 leading-relaxed">
              We provide safe and reliable NEMT services to medical centers throughout <strong className="text-pacalo-blue">Central Illinois</strong>.
            </p>
            <p className="text-base lg:text-xl text-gray-700 leading-relaxed">
              We prioritize your health schedule and ensure <strong className="text-pacalo-blue">on-time appointments</strong> for all transportation needs.
            </p>
            <div className="mt-6">
              <Link to="/certifications" className="inline-block px-6 py-3 rounded-xl bg-pacalo-blue text-white font-bold hover:bg-blue-700 transition-colors">See our certifications</Link>
            </div>
          </div>
        </div>

        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Our Partners</h3>
            <p className="text-base lg:text-lg text-gray-600">Trusted partnerships with leading healthcare providers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 items-center max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-1 w-full"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-12 lg:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-pacalo-blue to-blue-700 rounded-3xl p-6 lg:p-12 text-white text-center shadow-2xl">
          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-6 h-6 lg:w-8 lg:h-8 text-pacalo-gold" />
              ))}
            </div>
          </div>
          <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Highest-Rated in Central Illinois
          </h3>
          <p className="text-base lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
            Read our outstanding customer reviews to see why we are the top choice for medical transportation.
          </p>
          <a
            href="https://g.page/r/CfW0pd4CwkDbEAE/review"
            className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-pacalo-gold hover:bg-yellow-500 text-pacalo-blue font-bold rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaStar className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
            <span className="text-base lg:text-lg">Write a Review</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection