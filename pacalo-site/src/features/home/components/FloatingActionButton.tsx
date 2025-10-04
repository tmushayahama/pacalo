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
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      {/* Action buttons */}
      <div className={`flex flex-col-reverse gap-3 mb-3 transition-all duration-300 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <div
            key={action.label}
            className={`transform transition-all duration-300 ${isExpanded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
              }`}
            style={{
              transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
            }}
          >
            <a
              href={action.href}
              {...(action.external && { target: '_blank', rel: 'noopener noreferrer' })}
              className={`flex items-center gap-3 px-4 py-3 ${action.bgColor} ${action.hoverColor} text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[120px]`}
              onClick={() => setIsExpanded(false)}
            >
              <action.icon className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm whitespace-nowrap">{action.label}</span>
            </a>
          </div>
        ))}
      </div>

      {/* Main trigger button */}
      <button
        onClick={toggleExpanded}
        className={`relative flex items-center justify-center px-4 py-3 bg-gradient-to-r from-pacalo-blue to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 ${!isExpanded ? 'animate-pulse' : ''
          }`}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pacalo-blue to-blue-600 rounded-full blur-md opacity-50 -z-10 scale-110"></div>

        {/* Text/Icon with rotation animation */}
        <div className={`transform transition-all duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
          {isExpanded ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <span className="font-bold text-sm whitespace-nowrap">Book Now</span>
          )}
        </div>

        {/* Ripple effect */}
        <div className={`absolute inset-0 rounded-full border-2 border-white/30 ${!isExpanded ? 'animate-ping' : ''}`}></div>
      </button>

      {/* Backdrop for closing when clicking outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default FloatingActionButton;