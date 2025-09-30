import type React from 'react'

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      image: "/assets/images/idhs.jpg",
      alt: "IDHS logo",
      className: "h-24 w-auto",
      content: (
        <p className="leading-relaxed">
          We are a certified <strong>IDHS Non–Emergency Medical Transportation (NEMT) Service Provider</strong>, which is essential for serving clients enrolled in state–supported programs. This certification <strong>guarantees</strong> we meet all stringent state requirements for service compliance and quality care across Illinois.
        </p>
      )
    },
    {
      image: "/assets/images/cpr.png",
      alt: "CPR badge",
      className: "h-28 w-28",
      content: (
        <div className="leading-relaxed">
          <p className="mb-2">
            Choose the <strong>best stretcher transportation</strong> experience possible.
          </p>
          <p>
            Our service is <strong>professional, comfortable, and safe</strong>, with a team that is fully <strong>CPR–qualified</strong> to ensure the highest standard of patient care and immediate response during every transport.
          </p>
        </div>
      )
    },
    {
      image: "/assets/images/national-registry.png",
      alt: "EMT registry badge",
      className: "h-28 w-28",
      content: (
        <p className="leading-relaxed">
          Our service is <strong>professional, comfortable, and safe</strong>, with a team of <strong>highly trained EMTs (Emergency Medical Technicians)</strong>. Our EMTs are skilled in administering <strong>oxygen and certain life–saving medications</strong>, ensuring you receive expert care and monitoring throughout your journey.
        </p>
      )
    },
    {
      image: "/assets/images/idph.png",
      alt: "IDPH logo",
      className: "h-24 w-auto",
      content: (
        <div className="leading-relaxed">
          <p className="mb-2">
            We offer the <strong>best stretcher transportation</strong>—professional, comfortable, and safe.
          </p>
          <p>
            We are a fully <strong>IDPH Licensed Stretcher Van Service Provider</strong> in Illinois, License <strong>#0018SV</strong>, <strong>guaranteeing</strong> we meet the highest state safety standards.
          </p>
        </div>
      )
    }
  ]

  return (
    <section className="w-full bg-white text-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/30 to-transparent"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text mb-4">
            What makes us the best!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pacalo-blue to-pacalo-gold mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {certifications.map((cert, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-[160px,1fr] gap-8 md:gap-12 items-center">
                  <div className="flex justify-center md:justify-start">
                    <div className="bg-white rounded-xl p-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className={`${cert.className} object-contain`}
                      />
                    </div>
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed">
                    {cert.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}

export default CertificationsSection