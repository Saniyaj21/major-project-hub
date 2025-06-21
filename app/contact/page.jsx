import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactQuickMethods from '../components/contact/ContactQuickMethods'
import ContactFAQ from '../components/contact/ContactFAQ'

const ContactPage = () => {
  const faqs = [
    {
      question: "How long does the mentorship typically last?",
      answer: "The duration depends on your chosen package. Basic packages last 2 weeks, Standard packages run for 4 weeks, and Premium packages extend to 6 weeks with ongoing support."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in MERN stack (MongoDB, Express.js, React, Node.js), Next.js, and modern web development technologies. I also have experience with various databases, APIs, and deployment platforms."
    },
    {
      question: "Do you provide project templates and documentation?",
      answer: "Yes! All mentorship packages include professional documentation templates, project reports, and presentation slides. Premium packages also include video tutorials and advanced templates."
    },
    {
      question: "Can you help with project ideas and planning?",
      answer: "Absolutely! I help students brainstorm project ideas, plan the architecture, and select the right technologies for their specific requirements and skill level."
    },
    {
      question: "What if I need help after the mentorship period?",
      answer: "Standard and Premium packages include post-submission support. Premium packages offer 3 months of ongoing support to help with any questions or issues that arise."
    },
    {
      question: "How do the consultation sessions work?",
      answer: "Sessions are conducted via video calls (Zoom/Google Meet) where we can screen share, code together, and discuss your project progress. Sessions are flexible and scheduled at your convenience."
    }
  ]

  const contactMethods = [
    {
      title: "Email",
      description: "Send me a detailed message about your project requirements",
      icon: "📧",
      action: "Send Email",
      link: "mailto:mentor@projecthub.com"
    },
    {
      title: "WhatsApp",
      description: "Quick questions and instant responses",
      icon: "💬",
      action: "Chat on WhatsApp",
      link: "https://wa.me/1234567890"
    },
    {
      title: "LinkedIn",
      description: "Connect professionally and view my portfolio",
      icon: "💼",
      action: "Connect on LinkedIn",
      link: "https://linkedin.com/in/projectmentor"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <ContactHeader />
        <section className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <ContactForm />
          <div className="space-y-6 sm:space-y-8">
            <ContactQuickMethods contactMethods={contactMethods} />
          </div>
        </section>
        <ContactFAQ faqs={faqs} />
      </div>
    </main>
  )
}

export default ContactPage 