import type React from 'react';
import { FaShieldAlt, FaAmbulance, FaHeartbeat, FaUserCheck } from 'react-icons/fa';

const CertificationsStrip: React.FC = () => {
  const certifications = [
    { icon: FaShieldAlt, text: "IDHS NEMT Provider" },
    { icon: FaAmbulance, text: "IDPH Licensed Stretcher Van" },
    { icon: FaHeartbeat, text: "EMT / CPR Qualified" },
    { icon: FaUserCheck, text: "Background-Checked Drivers" }
  ];

  return (
    <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-6">
      {certifications.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="group flex items-center gap-2.5 px-4 md:px-5 py-2.5 bg-white/95 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-pacalo-blue transition-all duration-300"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg group-hover:bg-pacalo-blue group-hover:text-white transition-colors">
            <Icon className="w-4 h-4 text-pacalo-blue group-hover:text-white" />
          </div>
          <span className="font-bold text-gray-800 text-[13px] md:text-sm whitespace-nowrap">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CertificationsStrip;