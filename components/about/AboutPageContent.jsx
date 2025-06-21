import React from 'react';
import Image from 'next/image';

const AboutPageContent = () => {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg">
            Meet the Founder
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The driving force behind Major Project Hub, dedicated to empowering the next generation of engineers.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative h-48 w-48 sm:h-60 sm:w-60 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-200 ring-offset-4 ring-offset-gray-50">
                {/* Placeholder Image */}
                <Image
                  src="/file.svg" // Replace with your actual image path e.g., /saniyaj-mallik.jpg
                  alt="Saniyaj Mallik"
                  layout="fill"
                  objectFit="cover"
                  className="bg-gray-200"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Saniyaj Mallik</h2>
              <p className="text-md sm:text-lg font-semibold text-blue-600 mt-1">
                Founder & Lead Mentor | Associate Software Engineer @ WisdmLabs
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Saniyaj is a passionate software engineer with a mission to bridge the gap between academic learning and real-world industry demands. After navigating the challenges of final-year projects and campus placements himself—successfully landing a role at LTIMindtree and currently thriving at WisdmLabs—he was inspired to create a platform that makes the journey smoother for other students.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                With a strong foundation in the MERN stack, Next.js, and WordPress development, combined with a love for teaching, Saniyaj is committed to providing practical, hands-on mentorship.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 sm:mt-20 lg:mt-24 max-w-5xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">Core Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'JavaScript (ES6+)', 'PHP', 'WordPress', 'WooCommerce', 'REST APIs', 'Git & GitHub', 'Java', 'Python'].map(skill => (
                    <div key={skill} className="bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                        <p className="font-semibold text-gray-700 text-sm sm:text-base">{skill}</p>
                    </div>
                ))}
            </div>
        </div> */}

        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">My Mentorship Philosophy</h3>
            <div className="mt-8 text-center">
                <p className="text-gray-600 leading-relaxed text-md sm:text-lg max-w-3xl mx-auto">
                "I believe the best way to learn is by building. My goal is to move beyond theory and provide students with the practical guidance needed to create impressive, portfolio-worthy projects. Having successfully mentored several final-year groups, I focus on fostering real-world problem-solving skills and building confidence, ensuring every student is not just ready for their final review, but for their first job."
                </p>
                <div className="mt-8 flex justify-center gap-4 text-sm sm:text-base font-semibold">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">1000+ GitHub Contributions</span>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Cracked LTIMindtree</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPageContent; 