import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} EcoSpark. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <p className="mr-4">Follow us:</p>
            <a href="#" className="mr-4">
              <FaFacebook />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter />
            </a>
            <a href="#" className="mr-4">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
