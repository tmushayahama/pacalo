import type React from 'react'
import { Navigation } from '@/features/home'
import Footer from '@/features/home/Footer'
import FAQ from '@/features/home/components/FAQ'

const FAQPage: React.FC = () => {
  return (
    <div className="font-roboto bg-white overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 p-6 md:p-8">
              <FAQ />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FAQPage
