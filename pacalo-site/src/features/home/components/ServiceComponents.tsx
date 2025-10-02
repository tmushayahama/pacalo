import type React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative w-full h-48">
      <img
        src={icon}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
)