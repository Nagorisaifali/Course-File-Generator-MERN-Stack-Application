
// function About() {
//   return (
//     <div className='w-[100vw] h-[100vh] p-8 bg-cover bg-center ' style={{ backgroundImage: 'url(/home1.jpg)' }}>
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-4 text-center">About Medi-Caps</h2>
//       <p className="text-lg text-center">Shaping Future Technocrats Since 2015. As a private institution established under the Madhya Pradesh Niji Vishwavidyalaya Adhiniyam, we've been dedicated to providing a positive learning environment and supporting students' professional growth. Our goal is to create globally-minded citizens who can serve humanity through exceptional education and research. Join us in our mission to advance societies worldwide at this prestigious educational center.</p>
//     </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';

function About() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/home1.jpg')" }} // ✅ Place in /public folder
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
          About <span className="text-yellow-400">Medi-Caps</span>
        </h2>
        <p className="max-w-3xl text-lg md:text-xl leading-relaxed drop-shadow-sm">
          Shaping Future Technocrats Since <span className="font-semibold text-yellow-300">2015</span>. As a private
          institution under the Madhya Pradesh Niji Vishwavidyalaya Adhiniyam, we are committed to nurturing innovation,
          integrity, and excellence. Our vibrant ecosystem empowers students to grow professionally and personally,
          preparing them as global citizens to contribute meaningfully to society through quality education and
          world-class research.
          <br />
          <br />
          Join us on a journey of transformation at one of Central India’s most prestigious educational centers.
        </p>
      </div>
    </div>
  );
}

export default About;

