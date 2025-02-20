import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Northampton PIWC is a vibrant community of believers dedicated to
            spreading God's love.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="/ministries"
                className="hover:text-white transition-colors"
              >
                Ministries
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-white transition-colors">
                Events
              </a>
            </li>
            <li>
              <a href="/sermons" className="hover:text-white transition-colors">
                Sermons
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              window.location.href = `mailto:Kobeng909@gmail.com?subject=Subscribe&body=Email: ${email}`;
            }}
          >
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-transform transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Northampton PIWC. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
