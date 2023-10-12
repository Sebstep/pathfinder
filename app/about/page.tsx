import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Headings from "@/components/Doubleheadings";
import { FaGlobe, FaFacebook, FaLinkedin, FaLink } from "react-icons/fa";

export default function About() {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        {/* Top Part Wrapper */}
        <div className="flex flex-col text-center w-full mb-20">
          <Headings
            top="PROJECT CONSORTIUM"
            bottom="Participating Organizations"
          />
          <p className="mx-auto leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them.
          </p>
        </div>

        {/* Partnership Wrapper */}
        <div className="flex flex-wrap -m-4">
          {/* Partner 1 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                width={200}
                height={200}
                src="/images/206x206.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Partner 1
                </h2>
                <h3 className="text-gray-500 mb-3">Country</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <FaGlobe size={24} />
                  </a>
                  <a className="text-gray-500 ml-4">
                    <FaFacebook size={24} />
                  </a>
                  <a className="text-gray-500 ml-4">
                    <FaLinkedin size={24} />
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                width={200}
                height={200}
                src="/images/206x206.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Partner 2
                </h2>
                <h3 className="text-gray-500 mb-3">Country</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <FaGlobe size={24} />
                  </a>
                  <a className="text-gray-500 ml-4">
                    <FaFacebook size={24} />
                  </a>
                  <a className="text-gray-500 ml-4">
                    <FaLinkedin size={24} />
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                width={200}
                height={200}
                src="/images/206x206.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Partner 3
                </h2>
                <h3 className="text-gray-500 mb-3">Country</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <FaGlobe size={24} />
                  </a>
                  <a className="text-gray-500 ml-4">
                    <FaFacebook size={24} />
                  </a>
                  <a className="text-gray-500 ml-4">
                    <FaLinkedin size={24} />
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Partner 4 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                width={200}
                height={200}
                src="/images/206x206.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Partner 4
                </h2>
                <h3 className="text-gray-500 mb-3">Country</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <FaGlobe size={24} />
                  </a>
                  <a className="text-gray-500 ml-4">
                    <FaFacebook size={24} />
                  </a>
                  <a className="text-gray-500 ml-4">
                    <FaLinkedin size={24} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
