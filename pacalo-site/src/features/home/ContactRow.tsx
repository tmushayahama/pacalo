import React from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactRow: React.FC = () => {
  return (
    <div className="w-full" style={{ height: '150px', backgroundColor: '#0f3664f2' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 h-full">
          {/* Phone Card */}
          <div
            className="flex flex-col md:flex-col items-center justify-center text-center"
            style={{
              padding: '12px 8px',
              color: '#f2ba14',
              margin: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <div
              className="text-center mb-2"
              style={{
                width: '100%',
                fontSize: '40px'
              }}
            >
              <FaPhone />
            </div>
            <div className="text-center" style={{ width: '100%', fontSize: '12px' }}>
              <h6 className="text-yellow-400 font-semibold mb-1">Have a question? Call Us</h6>
              <h4
                className="font-bold"
                style={{
                  color: '#e5e5e5',
                  margin: '4px 0',
                  fontSize: '20px'
                }}
              >
                <a
                  href="tel:3093074564"
                  className="hover:opacity-70"
                  style={{ color: '#e5e5e5' }}
                >
                  (309) 307 4564
                </a>
              </h4>
            </div>
          </div>

          {/* Email Card */}
          <div
            className="flex flex-col md:flex-col items-center justify-center text-center"
            style={{
              padding: '12px 8px',
              color: '#f2ba14',
              margin: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <div
              className="text-center mb-2"
              style={{
                width: '100%',
                fontSize: '40px'
              }}
            >
              <FaEnvelope />
            </div>
            <div className="text-center" style={{ width: '100%', fontSize: '12px' }}>
              <h6 className="text-yellow-400 font-semibold mb-1">Drop us an e-mail</h6>
              <h4
                className="font-bold"
                style={{
                  color: '#e5e5e5',
                  margin: '4px 0',
                  fontSize: '20px'
                }}
              >
                <a
                  href="mailto:ride@pacalo.net"
                  className="hover:opacity-70"
                  style={{ color: '#e5e5e5' }}
                >
                  ride@pacalo.net
                </a>
              </h4>
            </div>
          </div>

          {/* Hours Card - Hidden on mobile, shown on desktop */}
          <div
            className="hidden md:flex flex-col md:flex-col items-center justify-center text-center"
            style={{
              padding: '12px 8px',
              color: '#f2ba14',
              margin: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <div
              className="text-center mb-2"
              style={{
                width: '100%',
                fontSize: '40px'
              }}
            >
              <FaClock />
            </div>
            <div className="text-center" style={{ width: '100%', fontSize: '12px' }}>
              <h6 className="text-yellow-400 font-semibold mb-1">We are open Mon-Sun</h6>
              <h4
                className="font-bold"
                style={{
                  color: '#e5e5e5',
                  margin: '4px 0',
                  fontSize: '20px'
                }}
              >
                24 Hours
              </h4>
            </div>
          </div>
        </div>

        {/* Mobile Hours Row */}
        <div className="block md:hidden text-center pb-4">
          <div
            className="text-center"
            style={{
              padding: '12px 8px',
              margin: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <h4
              className="font-bold"
              style={{
                color: '#e5e5e5',
                margin: '4px 0',
                fontSize: '20px'
              }}
            >
              We are open Mon-Sun <strong>24 Hours</strong>
            </h4>
          </div>
        </div>
      </div>

      {/* Mobile specific styling */}
      <style>{`
        @media (max-width: 767.98px) {
          .pac-contact-row {
            height: 100px;
          }
          .pac-contact-row .col-6 {
            padding: 0 2px;
          }
          .pac-contact-row .pac-card {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-items: left;
            padding: 8px 8px;
            text-align: left;
          }
          .pac-contact-row .pac-card .pac-icon {
            width: 25px;
            font-size: 20px;
          }
          .pac-contact-row .pac-card .pac-body {
            flex: 1;
            font-size: 10px;
          }
          .pac-contact-row .pac-card .pac-body h4 {
            margin: 2px 0;
            font-size: 10px;
            font-weight: bold;
          }
          .pac-contact-row .pac-card .pac-body h6 {
            margin: 2px 0;
            text-transform: capitalize;
            font-size: 10px;
            font-weight: bold;
          }
        }
      `}</style>
    </div>
  )
}

export default ContactRow