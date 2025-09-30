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
  className = "flex flex-row items-center justify-end w-full group"
}) => {
  const content = (
    <>
      <div className="text-right">
        <h4 className="text-lg text-white group-hover:opacity-70 transition-opacity">
          {children}
        </h4>
      </div>
      <div className="ml-5 text-pacalo-gold text-3xl flex-shrink-0">
        {icon}
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
  className = "space-y-6 text-right"
}) => {
  return (
    <div className={className}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        {title}
      </h2>
      <p className="text-white mb-6">
        <strong>{description}</strong>
      </p>
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
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        {title}
      </h2>
      <div className="text-white text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  )
}