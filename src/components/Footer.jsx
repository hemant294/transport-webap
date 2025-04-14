// Footer.jsx
import React from 'react';
// import { Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Brand</h2>
            <p className="text-gray-400 max-w-xs">Simple, elegant solutions for modern web development.</p>
          </div>

          {/* Navigation */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MdOutlineEmail size={16} className="mr-2" /> vaibhavgautam112004@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <MdLocalPhone size={16} className="mr-2" /> +91 7986031014
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Brand. All rights reserved.</p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;