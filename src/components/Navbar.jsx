import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-indigo-700 bg-opacity-90 text-white flex justify-between items-center px-6 py-4 z-50">
      {/* Brand / Logo */}
      <div className="text-xl font-bold">
        <h3>My Portfolio</h3>
      </div>

      {/* Desktop menu (visible on md and up) */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ name, href }) => (
          <li key={name}>
            <a href={href} className="hover:text-indigo-300 transition">
              {name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger icon (visible on mobile only) */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            // X icon
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            // Hamburger icon
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Mobile menu (visible when isOpen is true) */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 right-0 bg-indigo-700 flex flex-col items-center space-y-4 py-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="block px-4 py-2 hover:bg-indigo-600 rounded"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
