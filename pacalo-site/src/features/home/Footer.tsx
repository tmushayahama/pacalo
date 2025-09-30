import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Navigation */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
              <li>
                <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">
                  PACALO
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-600">
                  Our Services
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-gray-600 text-center md:text-right">
            &copy; {currentYear} - Contact{' '}
            <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">
              PACALO
            </a>{' '}
            for the right Transportation Experience.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer