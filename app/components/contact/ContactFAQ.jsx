import React from 'react'

const ContactFAQ = ({ faqs }) => (
  <section className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
      Frequently Asked Questions
    </h2>
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 overflow-hidden">
            <button className="w-full px-4 sm:px-6 py-4 text-left hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{faq.question}</h3>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div className="px-4 sm:px-6 pb-4">
              <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ContactFAQ 