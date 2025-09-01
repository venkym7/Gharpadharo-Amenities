import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">About Gharpadharo</h4>
          <p className="text-gray-400">
            A platform connecting property seekers and owners in Uttarakhand. Gharpadharo is committed to providing housing experiences with high-quality amenities and services to ensure a safe and comfortable stay.
          </p>
          <p className="mt-4 text-yellow-500 font-semibold cursor-pointer">Read more...</p>
        </div>
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Properties in Uttarakhand</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Properties in Dehradun</a></li>
            <li><a href="#" className="hover:text-white">Properties in Haridwar</a></li>
            <li><a href="#" className="hover:text-white">Properties in Nainital</a></li>
            <li><a href="#" className="hover:text-white">Properties in Rishikesh</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Property Types</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">1RK Properties</a></li>
            <li><a href="#" className="hover:text-white">1BHK Properties</a></li>
            <li><a href="#" className="hover:text-white">2BHK Properties</a></li>
            <li><a href="#" className="hover:text-white">3BHK Properties</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Contact Info</h4>
          <p>Gharpadharo HQ</p>
          <p className="mt-2">Rajapur Road, Dehradun, Uttarakhand</p>
          <p className="mt-2">Phone: +91 98765 43210</p>
          <p className="mt-2">Email: gharpadharo@gmail.com</p>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-8">
        © 2025 Gharpadharo. All rights reserved.
      </div>
    </footer>
  );
}
