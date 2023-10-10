// components/InstitutionLogos.js
import React from "react";
import Image from "next/image";

export default function InstitutionLogos() {
  return (
    <section className="">
      <h2 className="text-3xl font-semibold text-center mb-6">Participating Institutions</h2>
      <div className="flex flex-wrap justify-center items-center">
        {/* Replace the paths with the actual paths to your institution logos */}
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 bg-yellow-400">
          {/* <Image src="/institution1.png" alt="Institution 1" className="mx-auto" /> */}
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 bg-red-400">
          {/* <Image src="/institution2.png" alt="Institution 2" className="mx-auto" /> */}
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 bg-blue-400">
          {/* <Image src="/institution3.png" alt="Institution 3" className="mx-auto" /> */}
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 bg-lime-400">
          {/* <Image src="/institution4.png" alt="Institution 4" className="mx-auto" /> */}
        </div>
      </div>
    </section>
  );
}
