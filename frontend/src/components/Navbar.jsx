




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can use heroicons or fontawesome too

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-600 via-purple-800 to-gray-600 shadow-lg sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://www.medicaps.ac.in/public/frontend/images/medicaps-logo-new.webp"
            alt="Medi-Caps Logo"
            className="w-[180px] h-[45px] object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-400 transition duration-300">Services</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-yellow-400 transition duration-300">Signup</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-yellow-400 transition duration-300">Login</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 px-6 pb-4 space-y-3 text-white text-base rounded-b-xl shadow-md">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-300 transition">Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-300 transition">About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-300 transition">Services</Link></li>
          <li><Link to="/signup" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-300 transition">Signup</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-300 transition">Login</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;



