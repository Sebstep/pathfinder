// components/InstitutionLogos.js
import React from "react";
import Image from "next/image";

export default function InstitutionLogos() {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center items-center">
        {/* Replace the paths with the actual paths to your institution logos */}
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 mx-4">
          <Image src="/images/partners/unili.png" alt="University of Liechtenstein Logo" width={300} height={200} className="mx-auto" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 mx-4">
          <Image src="/images/partners/LAB.png" alt="LAB University of Applied Sciences Logo" width={300} height={200} className="mx-auto" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 mx-4">
          <Image src="/images/partners/unidu.png" alt="University of Dubrovnik Logo" width={300} height={200} className="mx-auto" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 mx-4">
          <Image src="/images/partners/formatio.png" alt="Formatio Private School Logo" width={300} height={200} className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
