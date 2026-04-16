import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  let NavLinks = ["Home", "React", "JavaScript", "Css", "Html"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-6 md:px-20 py-5 md:py-10 flex items-center justify-between relative">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl bg-black p-3 md:p-5 rounded-3xl text-white font-semibold">
        Interview Practice
      </h1>

      {/* Hamburger Button - Mobile only */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-gray-600">
        {NavLinks.map((link, index) => (
          <Link
            key={index}
            to={link === "Home" ? "/" : link.toLowerCase()}
            className="hover:text-black transition-colors duration-200"
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 text-lg font-medium text-gray-600 z-40">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              to={link === "Home" ? "/" : link.toLowerCase()}
              className="hover:text-black transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;