import type React from 'react'

interface ContactItemProps {
  icon: React.ReactNode
  children: React.ReactNode
  href?: string
  className?: string
}

export const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  children,
  href,
  className = "flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
}) => {
  const content = (
    <>
      <div className="text-pacalo-gold text-2xl flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-white">
          {children}
        </div>
      </div>
    </>
  )

  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>
      {content}
    </div>
  )
}

interface ContactSectionProps {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  children,
  className = "space-y-6"
}) => {
  return (
    <div className={className}>
      <div className="text-center lg:text-left mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white via-pacalo-gold to-white bg-clip-text mb-4">
          {title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-pacalo-gold to-white rounded-full lg:mx-0 mx-auto mb-4"></div>
        <p className="text-gray-200 leading-relaxed text-base">
          {description}
        </p>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}

interface AboutContentProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const AboutContent: React.FC<AboutContentProps> = ({
  title,
  children,
  className = "space-y-6"
}) => {
  return (
    <div className={className}>
      <div className="text-center lg:text-left mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-white via-pacalo-gold to-white bg-clip-text mb-6">
          {title}
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-pacalo-gold via-yellow-300 to-white rounded-full lg:mx-0 mx-auto"></div>
      </div>
      <div className="text-white text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  )
}