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
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pacalo-gold/20 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pacalo-blue to-pacalo-gold mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection