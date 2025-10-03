import type React from 'react'
import { ServiceCard } from './components/ServiceComponents'

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Wheelchair Transportation Excellence",
      description: "Embrace accessible transportation with our ADA-compliant services, tailored to accommodate wheelchairs of all sizes!",
      icon: "/assets/images/van.jpg"
    },
    {
      title: "Ambulatory Transportation Convenience",
      description: "Experience effortless mobility with our reliable Ambulatory transportation services!",
      icon: "/assets/images/car.jpg"
    },
    {
      title: "Professional Gurney/Stretcher Transport",
      description: "Our service is professional, comfortable, and safe, with a team of highly trained EMTs and CPR-qualified personnel. You can trust us for a peaceful, secure journey every time.",
      icon: "/assets/images/stretcher.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional medical transportation solutions for your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pacalo-blue to-pacalo-gold mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection