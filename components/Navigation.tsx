'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/socials', label: 'Socials' },
  ];

  return (
    <nav className="bg-stone-600 shadow-md fixed w-full z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-white flex items-center gap-3">
              <span>Agentic Lab</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="text-white hover:text-stone-300 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="size-6 border-white rounded"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-stone-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden text-xl mx-4`}>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-white hover:text-stone-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
