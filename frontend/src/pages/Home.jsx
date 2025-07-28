import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('username');
    if (token) {
      setIsLoggedIn(true);
      if (user) setUsername(user);
    }
  }, []);

  const goToCourseForm = () => navigate('/submit');
  const goToLogin = () => navigate('/login');
  const goToSignup = () => navigate('/signup');

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/home1.jpg')" }} // ✅ Image in public folder
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to <span className="text-yellow-400">Medi-Caps University</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Empowering students through excellence in education and technology.
        </p>

        {/* Buttons */}
        {isLoggedIn ? (
          <div className="flex gap-4">
            <button
              onClick={goToCourseForm}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl"
            >
              Go to Course Form
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={goToSignup}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Sign Up
            </button>
            <button
              onClick={goToLogin}
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;




// import React from 'react';



// function Home() {
//   return (
//     <div className="w-[100vw] h-[100vh] p-8 bg-cover bg-center " style={{ backgroundImage: 'url(/home1.jpg)' }}>
//       <div className=" bg-opacity-80 p-8 rounded ">
//         <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Medi-Caps University</h2>
//         <p className="text-lg text-center">Empowering through education and innovation.</p>
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const user = localStorage.getItem('username');
//     if (token) {
//       setIsLoggedIn(true);
//       if (user) setUsername(user);
//     }
//   }, []);

//   const goToCourseForm = () => {
//     navigate('/courseform');
//   };

//   const goToLogin = () => {
//     navigate('/login');
//   };

//   const goToSignup = () => {
//     navigate('/signup');
//   };

//   return (
//     <div
//       className="w-full h-screen bg-cover bg-center relative"
//       style={{ backgroundImage: 'url(/home1.jpg)' }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
//         <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
//           Welcome to <span className="text-yellow-400">Medi-Caps University</span>
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl">
//           Empowering students through education, innovation, and excellence.
//         </p>

//         {isLoggedIn ? (
//           <button
//             onClick={goToCourseForm}
//             className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl"
//           >
//             Go to Course Form
//           </button>
//         ) : (
//           <div className="flex gap-4">
//             <button
//               onClick={goToSignup}
//               className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-full font-semibold transition"
//             >
//               Signup
//             </button>
//             <button
//               onClick={goToLogin}
//               className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 rounded-full font-semibold transition"
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;




