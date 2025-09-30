import type React from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  reverse?: boolean
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, reverse = false }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <img src="/assets/images/icons/stars.png" alt="5 stars" className="h-5 mb-2 mx-auto md:mx-0" />
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
      <img src={icon} alt={title} className="w-20 h-20 object-contain" />
    </div>
  </div>
)