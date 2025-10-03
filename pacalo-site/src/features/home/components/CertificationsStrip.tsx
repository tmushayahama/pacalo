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
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 border-y border-blue-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {certifications.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="group flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-pacalo-blue transition-all duration-300"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg group-hover:bg-pacalo-blue group-hover:text-white transition-colors">
                <Icon className="w-4 h-4 text-pacalo-blue group-hover:text-white" />
              </div>
              <span className="font-bold text-gray-800 text-sm whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsStrip;