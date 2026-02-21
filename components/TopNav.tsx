"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <span className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">
          Prime Estates
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm items-center text-gray-900 dark:text-white">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4 text-gray-900 dark:text-white">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/properties" onClick={() => setIsOpen(false)}>
              Properties
            </Link>
          </li>
          <li>
            <Link href="/agents" onClick={() => setIsOpen(false)}>
              Agents
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
