import type React from 'react'

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      image: "/assets/images/updates/idhs.jpg",
      alt: "IDHS logo",
      className: "h-24 w-auto",
      content: (
        <p className="leading-relaxed">
          We are a certified <strong>IDHS Non–Emergency Medical Transportation (NEMT) Service Provider</strong>, which is essential for serving clients enrolled in state–supported programs. This certification <strong>guarantees</strong> we meet all stringent state requirements for service compliance and quality care across Illinois.
        </p>
      )
    },
    {
      image: "/assets/images/updates/cpr.png",
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
      image: "/assets/images/updates/national-registry.png",
      alt: "EMT registry badge",
      className: "h-28 w-28",
      content: (
        <p className="leading-relaxed">
          Our service is <strong>professional, comfortable, and safe</strong>, with a team of <strong>highly trained EMTs (Emergency Medical Technicians)</strong>. Our EMTs are skilled in administering <strong>oxygen and certain life–saving medications</strong>, ensuring you receive expert care and monitoring throughout your journey.
        </p>
      )
    },
    {
      image: "/assets/images/updates/idph.png",
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
    <section className="w-full bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-10">
          What makes us the best!
        </h2>

        <div className="space-y-10">
          {certifications.map((cert, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[140px,1fr] gap-6 md:gap-10 items-start">
              <img
                src={cert.image}
                alt={cert.alt}
                className={`${cert.className} object-contain mx-auto md:mx-0`}
              />
              {cert.content}
            </div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gray-200" />
    </section>
  )
}

export default CertificationsSection