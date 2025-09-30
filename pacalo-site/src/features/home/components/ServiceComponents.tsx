import type React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative">
    {/* Full-width image with 16:9 aspect ratio */}
    <div className="relative w-full aspect-video overflow-hidden">
      <img
        src={icon}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>

    {/* Content section */}
    <div className="p-6 text-center relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-pacalo-dark-blue mb-3 group-hover:text-pacalo-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pacalo-blue to-pacalo-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
)