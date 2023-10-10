// components/InstitutionLogos.js
import React from "react";
import Image from "next/image";

export default function InstitutionLogos() {
  return (
    <div className="mx-auto py-8">
      <div className="flex flex-wrap justify-center items-center">
        {/* Replace the paths with the actual paths to your institution logos */}
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 mx-4">
          <Image src="/images/logoipsum-235.svg" alt="Institution 1" width={300} height={200} className="mx-auto" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 mx-4">
          <Image src="/images/logoipsum-243.svg" alt="Institution 2" width={300} height={200} className="mx-auto" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 mx-4">
          <Image src="/images/logoipsum-251.svg" alt="Institution 3" width={300} height={200} className="mx-auto" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 mx-4">
          <Image src="/images/logoipsum-297.svg" alt="Institution 4" width={300} height={200} className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
