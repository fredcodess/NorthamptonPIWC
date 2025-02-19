import React, { useState } from "react";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div>
      <nav className="bg-primary px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="index.html" className="flex items-center space-x-3">
            <img
              src="media/logo.JPG"
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
          </a>

          {/* Live Service Indicator */}
          <div className="hidden md:flex items-center space-x-2 service-time-badge px-4 py-2 rounded-full bg-secondary text-white">
            <span className="animate-pulse inline-block h-3 w-3 rounded-full bg-white"></span>
            <span className="text-sm font-medium">
              Live Now: Sunday Service
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6 text-white items-center">
              <a
                href="index.html"
                className="hover:text-accent transition-colors py-2"
              >
                Home
              </a>
              <a
                href="About us.html"
                className="hover:text-accent transition-colors py-2"
              >
                About
              </a>
              <a
                href="Ministries.html"
                className="hover:text-accent transition-colors py-2"
              >
                Ministries
              </a>
              <a
                href="contact.html"
                className="hover:text-accent transition-colors py-2"
              >
                Contact
              </a>
              <a
                href="give.html"
                className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Give
              </a>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileNavOpen ? "block" : "hidden"
          } md:hidden mt-4 rounded-lg overflow-hidden bg-primary`}
        >
          <div className="p-4 space-y-4">
            <a
              href="index.html"
              className="block text-white hover:text-accent py-2 transition-colors"
            >
              Home
            </a>
            <a
              href="About us.html"
              className="block text-white hover:text-accent py-2 transition-colors"
            >
              About
            </a>
            <a
              href="Ministries.html"
              className="block text-white hover:text-accent py-2 transition-colors"
            >
              Ministries
            </a>
            <a
              href="contact.html"
              className="block text-white hover:text-accent py-2 transition-colors"
            >
              Contact
            </a>
            <a
              href="give.html"
              className="block bg-white text-primary px-6 py-2 rounded-full text-center font-medium hover:bg-gray-100 transition-all"
            >
              Give
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
