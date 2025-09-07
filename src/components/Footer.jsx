import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">About Gharpadharo</h4>
          <p className="text-gray-400 leading-relaxed">
            A platform connecting property seekers and owners in Uttarakhand. 
            Gharpadharo is committed to providing housing experiences with high-quality 
            amenities and services to ensure a safe and comfortable stay.
          </p>
          <p className="mt-4 text-yellow-500 font-semibold hover:text-yellow-400 cursor-pointer transition duration-300">
            Read more...
          </p>
          
        </div>

        {/* Properties by Location */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Properties in Uttarakhand</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500 transition">Properties in Dehradun</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Properties in Haridwar</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Properties in Nainital</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Properties in Rishikesh</a></li>
          </ul>
        </div>

        {/* Property Types */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Property Types</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500 transition">1RK Properties</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">1BHK Properties</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">2BHK Properties</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">3BHK Properties</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Contact Info</h4>
          <p>Gharpadharo HQ</p>
          <p className="mt-2">Rajapur Road, Dehradun, Uttarakhand</p>
          <p className="mt-2">📞 +91 98765 43210</p>
          <p className="mt-2">✉️ gharpadharo@gmail.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2025 Gharpadharo. All rights reserved.
      </div>
    </footer>
  );
}
