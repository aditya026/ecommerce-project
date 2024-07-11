import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Footer Column 1 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-xl text-gray-900 font-semibold mb-4">LOGO</h4>
            <ul>
              <li>
                <a href="#" className="text-blue-500 font-semibold">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700">
                  Lorem ipsum dolor sit amet.
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 2 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-xl font-semibold mb-4 text-black hover:text-blue-500">
              IMPORTANT LINK
            </h4>
            <ul>
              <li>
                <a href="#" className="text-black hover:text-blue-500">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-blue-500">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-blue-500">
                  PRIVATE POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-blue-500">
                  TERMS OF USE
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-blue-500">
                  REFUND POLICY
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div className="w-full md:w-1/4 px-4 mb-8 ">
            <h4 className="text-xl text-black font-semibold mb-4">
              CONTACT
            </h4>
            <ul>
              <li>
                <a href="#" className="text-black hover:text-blue-500">
                  mail@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-blue-500">
                  +91 7426921855
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 4 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
  <h4 className="text-xl text-gray-900 font-semibold mb-4">
    Follow Us
  </h4>
  <div className="flex items-center justify-between text-xl">
    <a
      href="#"
      className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white"
    >
      <FaInstagram />
    </a>
    <a
      href="#"
      className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white"
    >
      <FaFacebookF />
    </a>
    <a
      href="#"
      className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white"
    >
      <FaXTwitter />
    </a>
    <a
      href="#"
      className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white"
    >
      <FaYoutube />
    </a>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
