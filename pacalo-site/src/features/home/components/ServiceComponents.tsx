import type React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
    <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
      <img src={icon} alt={title} className="max-w-full max-h-full object-contain" />
    </div>
    <h3 className="text-xl font-bold text-blue-600 mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
)