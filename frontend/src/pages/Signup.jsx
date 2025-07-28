

// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_base_url } from "../helper"
const Signup = () => {
   
    const [username, setUsername] = useState("") ; 
    const [email, setEmail] = useState("") ; 
    const [password, setPassword] = useState("") ; 
    const [error , setError] = useState("") ; 

    const navigate = useNavigate() ; 

    const submitForm = async (e) => {
      e.preventDefault();
      setError("");

    try {
    const res = await fetch(`${api_base_url}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({  username, email, password })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Signup failed");

      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
};

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/home1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"></div>

      {/* Signup Card */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6 drop-shadow">
            Create <span className="text-white">Account</span>
          </h2>

          <form onSubmit={submitForm} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition duration-300"
            >
              Signup
            </button>
          </form>

          <p className="text-sm text-center text-white mt-4">
            Already have an account?
            <Link to="/login" className="text-yellow-300 hover:underline ml-1">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;