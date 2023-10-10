"use client";
import React from "react";
import Link from "next/link";

const toggleMobileMenu = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
};

export default function Navigation() {
  return (
    <nav className="bg-blue-500 p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-semibold">
            Pathfinder
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/chat" className="text-white hover:text-gray-300">
              Chat
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              className="text-white p-2 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="mobile-menu hidden md:hidden mt-2 space-y-2">
          <Link href="/chat" className="text-white hover:text-gray-300 block">
            Chat
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 block">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
