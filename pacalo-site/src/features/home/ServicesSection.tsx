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
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection