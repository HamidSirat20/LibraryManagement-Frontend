import { useState } from "react";
import { Link } from "react-router";
import { FiSearch, FiUser, FiMenu, FiX, FiHome } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-white tracking-tight">
              Library<span className="text-blue-400">Hub</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link
                to="/books"
                className="text-gray-200 hover:text-white transition px-3 py-2 text-sm font-medium">
                Books
              </Link>
              <Link
                to="/about"
                className="text-gray-200 hover:text-white transition px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-200 hover:text-white transition px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Right side: Search + User */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="bg-white/10 text-white placeholder-gray-300 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-sm border border-white/20"
              />
              <FiSearch
                className="absolute right-3 top-2 text-gray-300"
                size={16}
              />
            </div>
            <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-2 transition">
              <FiUser size={18} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-200 hover:text-white px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link
              to="/books"
              className="block text-gray-200 hover:text-white px-3 py-2 text-base font-medium">
              Books
            </Link>
            <Link
              to="/about"
              className="block text-gray-200 hover:text-white px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-200 hover:text-white px-3 py-2 text-base font-medium">
              Contact
            </Link>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full bg-white/10 text-white placeholder-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-sm border border-white/20"
              />
              <FiSearch
                className="absolute right-3 top-2.5 text-gray-300"
                size={16}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
