import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaXTwitter, FaLinkedinIn, FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-fodBlue text-white py-10 px-6 md:px-16 relative">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Get In Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mauris mauris risus ipsum
            cursus risus quam dictum sed orci. Eu ut feugiat nullam.
          </p>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 border border-gray-400 rounded-full">
              <FaEnvelope className="text-fodOrange" />
            </div>
            <span className="text-gray-200 text-sm">fodholidays@gamil.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 border border-gray-400 rounded-full">
              <FaPhone className="text-fodOrange" />
            </div>
            <span className="text-gray-200 text-sm">+1-97353-61805</span>
          </div>
        </div>

        {/* Quick Action */}
        <div className="md:ml-10">
          <h3 className="text-xl font-semibold mb-4">Quick Action</h3>
          <div className="grid grid-cols-2 gap-y-2 text-gray-300 text-sm">
            <a href="#" className="hover:text-fodOrange">Home</a>
            <a href="#" className="hover:text-fodOrange">FAQ's</a>
            <a href="#" className="hover:text-fodOrange">Explore</a>
            <a href="#" className="hover:text-fodOrange">Contact Us</a>
            <a href="#" className="hover:text-fodOrange">Weekend Trips</a>
            <a href="#" className="hover:text-fodOrange">Blogs and Newsletters</a>
            <a href="#" className="hover:text-fodOrange">About Us</a>
          </div>
        </div>

        {/* Social Connect */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Connect</h3>
          <div className="flex items-center gap-5 text-2xl">
            <a href="#" className="hover:text-fodOrange"><FaFacebookF /></a>
            <a href="#" className="hover:text-fodOrange"><FaXTwitter /></a>
            <a href="#" className="hover:text-fodOrange"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="absolute right-6 md:right-16 bottom-10 bg-fodOrange hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaArrowUp />
      </button>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-400 text-sm">
        © 2025 FOD Holidays — All Rights Reserved |
        <a href="#" className="hover:text-fodOrange ml-1"> Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
