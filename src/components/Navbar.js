"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ's", href: "/faq" }, // ✅ fixed
  ];

  return (
    <nav className="w-full sticky top-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src="/icon 2.png"
              alt="Brand Grid Logo"
              width={65}
              height={65}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="leading-tight">
            <h1 className="text-xl font-black text-white tracking-tight">
              Brand Grid
            </h1>
            <p className="text-xs text-gray-400 text-center -mt-1 tracking-widest font-bold">
              STUDIO
            </p>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          {/* Hotmail button */}
          <Link
            href="mailto:hello.brandsgrid@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-blue-500/25"
          >
            <Image
              src="/email (1).png"
              alt="Hotmail"
              width={54}
              height={54}
              className="object-contain"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
