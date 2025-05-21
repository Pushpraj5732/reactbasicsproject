import React from 'react';
// import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white mt-10 border-t py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">ShopEase</h2>
          <p className="text-sm">Your favorite place to buy awesome stuff.</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Categories</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Social Media */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaGithub /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
          </div>
        </div> */}
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
