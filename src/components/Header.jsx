import React, { useState } from "react";
import { HiUser } from "react-icons/hi2";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="https://www.gharpadharo.com/assets/logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold text-gray-800 tracking-wide">
            Gharpadharo
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {["Home", "Properties", "About", "Pricing", "Contact", "Careers", "Blog"].map(
            (item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative hover:text-yellow-500 transition"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 hover:w-full"></span>
              </a>
            )
          )}
          <a
            href="#"
            className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            <HiUser className="text-xl" />
            Login/Register
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-lg font-medium text-gray-800 z-40">
          {["Home", "Properties", "About", "Pricing", "Contact", "Careers", "Blog"].map(
            (item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-yellow-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a
            href="#"
            className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <HiUser className="text-xl" />
            Login/Register
          </a>
        </div>
      )}
    </header>
  );
}
