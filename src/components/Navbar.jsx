import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-primary shadow-lg">
      <nav className="px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/media/logo.JPG"
              alt="Church Logo"
              className="h-12 w-12 rounded-full shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">
                Northampton PIWC
              </h1>
              <p className="text-sm text-white/80">
                Pentecost International Worship Centre
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary text-white">
            <span className="animate-pulse inline-block h-3 w-3 rounded-full bg-white"></span>
            <span className="text-sm font-medium">
              Live Now: Sunday Service
            </span>
          </div>

          <nav className="hidden md:flex space-x-6 text-white items-center">
            <Link to="/" className="hover:text-accent transition-colors py-2">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-accent transition-colors py-2"
            >
              About
            </Link>
            <Link
              to="/ministries"
              className="hover:text-accent transition-colors py-2"
            >
              Ministries
            </Link>
            <Link
              to="/contact"
              className="hover:text-accent transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              to="/give"
              className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Give
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMobileNavOpen ? <X size={30} /> : <Menu size={30} />}{" "}
          </button>
        </div>

        {isMobileNavOpen && (
          <div className="md:hidden mt-4 rounded-lg overflow-hidden bg-primary p-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-accent py-2 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-accent py-2 transition-colors"
            >
              About
            </Link>
            <Link
              to="/ministries"
              className="block text-white hover:text-accent py-2 transition-colors"
            >
              Ministries
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-accent py-2 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/give"
              className="block bg-white text-primary px-6 py-2 rounded-full text-center font-medium hover:bg-gray-100 transition-all"
            >
              Give
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
