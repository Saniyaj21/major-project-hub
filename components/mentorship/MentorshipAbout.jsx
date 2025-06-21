import React from 'react'

const MentorshipAbout = () => (
  <section className="mb-12 sm:mb-16">
    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
          Why Choose My Mentorship?
        </h2>
        <div className="space-y-4 text-gray-600">
          <p className="text-base sm:text-lg">
            With over 5 years of experience in full-stack development and mentoring hundreds of students, I understand the challenges you face in building your final year project.
          </p>
          <p>
            I specialize in MERN stack and Next.js applications, helping students create professional-grade projects that not only meet academic requirements but also demonstrate real-world development skills.
          </p>
          <p>
            My approach focuses on teaching you industry best practices, proper architecture, and clean code principles that will serve you well in your future career.
          </p>
        </div>
        <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm sm:text-base text-gray-600">Students Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">4.9/5</div>
            <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">95%</div>
            <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">My Expertise</h3>
        <div className="space-y-3">
          {[
            "MERN Stack Development",
            "Next.js & React",
            "Database Design",
            "API Development",
            "UI/UX Design",
            "Deployment & DevOps",
            "Project Management",
            "Technical Documentation"
          ].map((skill, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default MentorshipAbout 