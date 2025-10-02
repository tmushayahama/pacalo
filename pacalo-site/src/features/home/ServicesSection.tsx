import type React from 'react'
import { ServiceCard } from './components/ServiceComponents'

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Wheelchair Transportation",
      description: "ADA-compliant services for wheelchairs of all sizes with professional, trained drivers.",
      icon: "/assets/images/van.jpg"
    },
    {
      title: "Ambulatory Transportation",
      description: "Reliable door-to-door transportation for those who can walk but need assistance.",
      icon: "/assets/images/car.jpg"
    },
    {
      title: "Stretcher Transport",
      description: "Professional stretcher service with EMT-trained staff and medical equipment.",
      icon: "/assets/images/stretcher.jpg"
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional medical transportation solutions for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection