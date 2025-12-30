import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      Swal.fire({
        icon: "success",
        title: "Logged out",
        text: "You have been logged out successfully.",
        timer: 1500,
        showConfirmButton: false,
      });

      setMobileSidebarOpen(false);
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: error.message,
      });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🚚</span>
            <span className="text-[#FF6B00] font-extrabold text-xl">
              ShipUp
            </span>
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

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm font-semibold text-gray-600">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded-full font-bold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-orange-200"
              >
                Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-gray-700"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <CiMenuFries />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          mobileSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileSidebarOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full
        w-[85%] max-w-sm
        bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A]
        text-white
        z-50
        p-6
        transform transition-transform duration-300
        ${mobileSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-extrabold text-[#FF6B00]">
            ShipUp
          </span>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="text-3xl text-white hover:text-[#FF6B00] transition"
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <input
            className="w-full py-2 pl-10 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-[#FF6B00]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-2.5 left-3 text-gray-400 text-xl" />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-200">
          <li>
            <Link
              to="/"
              onClick={() => setMobileSidebarOpen(false)}
              className="hover:text-[#FF6B00] transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => setMobileSidebarOpen(false)}
              className="hover:text-[#FF6B00] transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMobileSidebarOpen(false)}
              className="hover:text-[#FF6B00] transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/driver"
              onClick={() => setMobileSidebarOpen(false)}
              className="hover:text-[#FF6B00] transition"
            >
              Driver
            </Link>
          </li>

          {user ? (
            <li className="pt-4">
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-3 rounded-full font-bold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="pt-4">
              <Link
                to="/signup"
                onClick={() => setMobileSidebarOpen(false)}
                className="block w-full bg-[#FF6B00] text-white py-3 rounded-full text-center font-bold hover:bg-orange-600 transition"
              >
                Sign Up
              </Link>
            </li>
          )}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
