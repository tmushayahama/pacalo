import type React from 'react';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaCalendarAlt, FaTimes } from 'react-icons/fa';

const FloatingActionButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const actions = [
    {
      icon: FaPhone,
      label: 'Call Us',
      href: 'tel:3093074564',
      bgColor: 'bg-pacalo-blue',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/13093074564?text=Hello,%20I%20would%20like%20to%20book%20a%20medical%20transport%20service.',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      external: true,
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:ride@pacalo.net',
      bgColor: 'bg-pacalo-gold',
      hoverColor: 'hover:bg-yellow-600',
    },
    {
      icon: FaCalendarAlt,
      label: 'Book',
      href: '/request-ride',
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
    },
  ];

  return (
    <>
      {/* Backdrop for closing when clicking outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        {/* Action buttons */}
        {isExpanded && (
          <div className="flex flex-col gap-3 mb-3 items-end">
            {actions.map((action, index) => (
              <a
                key={action.label}
                href={action.href}
                {...(action.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className={`flex items-center justify-center gap-3 px-4 py-3 ${action.bgColor} ${action.hoverColor} text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-in slide-in-from-right fade-in`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationDuration: '300ms',
                  animationFillMode: 'backwards'
                }}
                onClick={() => setIsExpanded(false)}
              >
                <action.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-semibold text-sm whitespace-nowrap">{action.label}</span>
              </a>
            ))}
          </div>
        )}

        {/* Main trigger button */}
        <button
          onClick={toggleExpanded}
          className="ml-auto relative flex items-center justify-center px-5 py-3.5 bg-gradient-to-r from-pacalo-blue to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label={isExpanded ? 'Close menu' : 'Open contact menu'}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pacalo-blue to-blue-600 rounded-full blur-md opacity-50 -z-10 scale-110"></div>

          {/* Text/Icon */}
          {isExpanded ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <span className="font-bold text-sm whitespace-nowrap">Book Now</span>
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingActionButton;