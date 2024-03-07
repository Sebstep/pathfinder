import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Headings from "@/components/Doubleheadings";
import { FaGlobe, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaLink } from "react-icons/fa";

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
            {/* TODO: Remove this sample text */}
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,
            subway tile poke farm-to-table. Franzen you probably havent heard of them.
          </p>
        </div>

        {/* Partnership Wrapper */}
        <div className="flex flex-wrap -m-4">
          {/* Partner 1 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 w-48 object-contain object-center sm:mb-0 mb-4"
                width={200}
                height={200}
                src="/images/partners/unili.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  University of Liechtenstein
                </h2>
                <h3 className="text-gray-500 mb-3">Liechtenstein 🇱🇮</h3>
                <p className="mb-4">
                  The University of Liechtenstein specializes in architecture and business
                  economics, offering an intimate academic environment with a strong focus
                  on sustainability and innovation.
                </p>
                <span className="inline-flex">
                <a
                    className="text-gray-500 hover:text-eu-blue"
                    href="mailto:sebastian.moder@uni.li"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaEnvelope size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.uni.li/en/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaGlobe size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.facebook.com/uni.li"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaFacebook size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.instagram.com/uni_li"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaInstagram size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.linkedin.com/school/universit-t-liechtenstein/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaLinkedin size={24} />
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 w-48 object-contain object-center sm:mb-0 mb-4"
                width={200}
                height={200}
                src="/images/partners/LAB.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  LAB University of Applied Sciences
                </h2>
                <h3 className="text-gray-500 mb-3">Finland 🇫🇮</h3>
                <p className="mb-4">
                  LAB University of Applied Sciences in Finland stands out for its applied
                  research and education in health and wellbeing, circular economy, and
                  design, preparing students for impactful careers with a global
                  perspective.
                </p>
                <span className="inline-flex">
                  <a
                    className="text-gray-500 hover:text-eu-blue"
                    href="https://lab.fi/en/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaGlobe size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.facebook.com/LABfinland"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaFacebook size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.instagram.com/labfinland/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaInstagram size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.linkedin.com/school/labfinland/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaLinkedin size={24} />
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="team"
                className="flex-shrink-0 w-48 object-contain object-center sm:mb-0 mb-4"
                width={200}
                height={200}
                src="/images/partners/unidu.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  University of Dubrovnik
                </h2>
                <h3 className="text-gray-500 mb-3">Croatia 🇭🇷</h3>
                <p className="mb-4">
                  The University of Dubrovnik, Croatia, renowned for its maritime studies,
                  electrical engineering, and business courses, combines rich historical
                  heritage with modern educational approaches.
                </p>
                <span className="inline-flex">
                  <a
                    className="text-gray-500 hover:text-eu-blue"
                    href="https://www.unidu.hr/eng/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaGlobe size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.facebook.com/UNIDUcro"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaFacebook size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.instagram.com/sveucilisteudubrovniku/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaInstagram size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.linkedin.com/school/unidu-cro/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaLinkedin size={24} />
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Partner 4 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
              {/* change the items-start to items-center to change vertical alignment of the image */}
              <Image
                alt="team"
                className="flex-shrink-0 w-48 object-contain object-center sm:mb-0 mb-4"
                width={200}
                height={200}
                src="/images/partners/formatio.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Formatio Private School
                </h2>
                <h3 className="text-gray-500 mb-3">Liechtenstein 🇱🇮</h3>
                <p className="mb-4">
                  Formatio Private School was founded in 1995 and pioneers personalized
                  education, fosters strengths, and cultivates digital proficiency,
                  preparing students for the 21st-century landscape with excellence and
                  innovation.
                </p>
                <span className="inline-flex">
                  <a
                    className="text-gray-500 hover:text-eu-blue"
                    href="https://www.formatio.li/en/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaGlobe size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.facebook.com/formatioprivatschule"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaFacebook size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.instagram.com/formatio_privatschule/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <FaInstagram size={24} />
                  </a>
                  <a
                    className="text-gray-500 hover:text-eu-blue ml-4"
                    href="https://www.linkedin.com/company/formatio-privatschule/"
                    rel="noopener noreferrer"
                    target="_blank">
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
