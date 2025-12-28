import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-4xl">🚚</span>
            <span className="text-2xl font-extrabold text-[#FF6B00]">
              ShipUp
            </span>
          </div>
          <p className="text-gray-400">Efficient. Fast. Affordable.</p>
        </div>

        <div>
          <h4 className="text-[#FF6B00] font-bold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <a
              href="#services"
              className="text-gray-300 hover:text-[#FFD700] transition"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-[#FFD700] transition"
            >
              Pricing
            </a>
            <Link
              to="/driver"
              className="text-gray-300 hover:text-[#FFD700] transition"
            >
              Become a Driver
            </Link>
            <a
              href="#"
              className="text-gray-300 hover:text-[#FFD700] transition"
            >
              Support
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[#FF6B00] font-bold text-lg mb-4">Contact Us</h4>
          <div className="flex flex-col gap-2 text-gray-300">
            <p>📱 +234 XXX XXX XXXX</p>
            <p>📧 hello@ShipUp.com</p>
            <p>📍 Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>© 2025 SholaAde Logistics. Starting Small, Growing Big.</p>
      </div>
    </footer>
  );
};

export default Footer;
