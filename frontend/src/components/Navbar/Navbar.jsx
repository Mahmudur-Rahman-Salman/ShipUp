import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🚚</span>
          <div className="leading-none">
            <span className="text-[#FF6B00] font-extrabold text-xl tracking-tighter">
              ShipUp
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-semibold text-[#1A1A2E]">
          <Link to="/" className="hover:text-[#FF6B00] transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#FF6B00] transition">
            About
          </Link>
          <Link to="/services" className="hover:text-[#FF6B00] transition">
            Services
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/signup"
          className="hidden md:inline-block bg-[#FF6B00] text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-orange-200"
        >
          Sign Up
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMobileSidebarOpen(true)}
        >
          <CiMenuFries />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${
          mobileSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full bg-white p-6 transform transition-transform duration-300 ${
          mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="text-3xl text-gray-700"
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>
        {/* Search */}
        <div className="relative mb-6">
          <input
            className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 outline-none focus:border-[#FF6B00]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-2.5 left-3 text-gray-500 text-xl" />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-700">
          <li>
            <Link to="/" onClick={() => setMobileSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <Link to="/driver">Driver</Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="inline-block mt-4 bg-[#FF6B00] text-white px-6 py-3 rounded-full text-center"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
