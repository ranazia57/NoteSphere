import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, NotepadText } from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-neutral-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">

        {/* Two column layout for visible sections */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">

          {/* Left side: Branding and social */}
          <div className="max-w-lg">
            <div className="flex items-center mb-4">
              <NotepadText size={25} className="text-orange-400 mx-1" />
              <span className="text-2xl font-bold">NoteSphere</span>
            </div>
            <p className="text-gray-400 mb-6">

              NoteSphere is your smart companion for capturing ideas,<br /> managing tasks, and staying organized — all <br />in one seamless space.


            </p>
            <div className="flex space-x-4">
              <Link to="facebook.com" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <Facebook size={20} />
              </Link>
              <Link to="twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </Link>
              <Link to="instagram.com" className="text-gray-400 hover:text-pink-600 transition-colors duration-200">
                <Instagram size={20} />
              </Link>
              <Link to="youtube.com" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Right side: Contact */}
          <div className="max-w-md">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 mr-10">
              <li className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Pak Avenue, Sahiwal District, Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+92-3116586081</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">ranaziauldin.sensetional@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NoteSphere. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-white text-sm">Privacy Policy</Link>
              <Link to="/" className="text-white text-sm">Terms of Service</Link>
              <Link to="/" className="text-white text-sm">Shipping Policy</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
