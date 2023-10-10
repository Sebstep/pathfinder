import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0 text-white">
            <p className="text-base">&copy; 2021 Pathfinder Project</p>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <Link href="#" className="text-white hover:text-gray-400 mx-2">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white hover:text-gray-400 mx-2">
              Terms of Service
            </Link>
            <Link href="#" className="text-white hover:text-gray-400 mx-2">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
