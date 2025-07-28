import React from 'react';

function Services() {
  return (
    <div
      className="w-full h-auto min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/home1.jpg')" }} // Make sure home1.jpg is in /public
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
          Our <span className="text-yellow-400">Services</span>
        </h2>

        <div className="max-w-4xl text-lg md:text-xl leading-relaxed drop-shadow-sm text-justify">
          <p className="mb-4">
            At <span className="font-semibold text-yellow-300">Medi-Caps University</span>, we deliver a dynamic suite of academic and student-centered services tailored to foster holistic development and excellence.
          </p>

          <p className="mb-4">
            <strong className="text-yellow-300">Academic Services:</strong> Our curriculum is aligned with industry demands, delivered through smart classrooms, labs, digital library access, and expert faculty mentorship.
          </p>

          <p className="mb-4">
            <strong className="text-yellow-300">Student Support:</strong> We offer 24/7 Wi-Fi campus, dedicated mental wellness counselors, scholarships, and placement training through our robust T&P cell.
          </p>

          <p className="mb-4">
            <strong className="text-yellow-300">Research & Innovation:</strong> Students benefit from incubation labs, hands-on projects, startup mentorship, and access to funded research initiatives.
          </p>

          <p>
            <strong className="text-yellow-300">Campus Life:</strong> From comfortable hostels and transport to vibrant clubs, sports, and cultural events — we ensure an enriching university experience for every student.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
