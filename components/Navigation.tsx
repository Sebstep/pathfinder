import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-blue-500 p-4">
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
            {/* Add your mobile menu button here */}
          </div>
        </div>
      </div>
    </nav>
  );
}
