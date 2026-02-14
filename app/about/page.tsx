import React from "react";
import Image from "next/image";
import DoubleHeadings from "@/components/DoubleHeadings";
import Link from "next/link";
import { FaGlobe, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

interface Partner {
  name: string;
  country: string;
  description: string;
  imgSrc: string;
  socialLinks: SocialLink[];
}

const partners: Partner[] = [
  // Partner 1
  {
    name: "University of Liechtenstein",
    country: "Liechtenstein 🇱🇮",
    description:
      "The University of Liechtenstein specializes in architecture and business economics, offering an intimate academic environment with a strong focus on sustainability and innovation.",
    imgSrc: "/images/partners/unili.png",
    socialLinks: [
      { name: "Website", url: "https://www.uni.li/en/", icon: <FaGlobe size={24} /> },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/school/universit-t-liechtenstein/",
        icon: <FaLinkedin size={24} />,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/uni.li",
        icon: <FaFacebook size={24} />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/uni_li",
        icon: <FaInstagram size={24} />,
      },
    ],
  },
  // Partner 2
  {
    name: "LAB University of Applied Sciences",
    country: "Finland 🇫🇮",
    description:
      "LAB University of Applied Sciences in Finland stands out for its applied research and education in health and wellbeing, circular economy, and design, preparing students for impactful careers with a global perspective.",
    imgSrc: "/images/partners/LAB.png",
    socialLinks: [
      { name: "Website", url: "https://lab.fi/en/", icon: <FaGlobe size={24} /> },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/school/labfinland/",
        icon: <FaLinkedin size={24} />,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/LABfinland",
        icon: <FaFacebook size={24} />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/labfinland/",
        icon: <FaInstagram size={24} />,
      },
    ],
  },
  // Partner 3
  {
    name: "University of Dubrovnik",
    country: "Croatia 🇭🇷",
    description:
      "The University of Dubrovnik, Croatia, renowned for its maritime studies, electrical engineering, and business courses, combines rich historical heritage with modern educational approaches.",
    imgSrc: "/images/partners/unidu.png",
    socialLinks: [
      { name: "Website", url: "https://www.unidu.hr/eng/", icon: <FaGlobe size={24} /> },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/school/unidu-cro/",
        icon: <FaLinkedin size={24} />,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/UNIDUcro/",
        icon: <FaFacebook size={24} />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/sveucilisteudubrovniku/",
        icon: <FaInstagram size={24} />,
      },
    ],
  },
  // Partner 4
  {
    name: "Formatio Private School",
    country: "Liechtenstein 🇱🇮",
    description:
      "Formatio Private School was founded in 1995 and pioneers personalized education, fosters strengths, and cultivates digital proficiency, preparing students for the 21st-century landscape with excellence and innovation.",
    imgSrc: "/images/partners/formatio.png",
    socialLinks: [
      {
        name: "Website",
        url: "https://www.formatio.li/en/",
        icon: <FaGlobe size={24} />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/formatio-privatschule/",
        icon: <FaLinkedin size={24} />,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/formatioprivatschule",
        icon: <FaFacebook size={24} />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/formatio_privatschule/",
        icon: <FaInstagram size={24} />,
      },
    ],
  },
];

function SocialIcons({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex space-x-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          title={link.name}
          className="text-gray-500 hover:text-eu-blue transition-colors">
          {link.icon}
        </Link>
      ))}
    </div>
  );
}

function PartnerWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 sm:p-6 xl:w-1/2">
      <div className="h-full flex flex-col sm:flex-row items-start justify-center text-left gap-4 sm:gap-0 sm:px-4">
        {children}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="container py-16 mx-auto">
      {/* Top Part Wrapper */}
      <div className="flex flex-col mb-16 w-5/6 md:w-1/2 lg:max-w-2xl lg:w-full mx-auto">
        <DoubleHeadings
          top="PROJECT CONSORTIUM"
          bottom="Participating Organizations"
        />
        <p className="mb-6 text-gray-600 leading-relaxed">
          Pathfinder is a collaborative Erasmus+ project that brings together leading
          institutions in higher education to address the challenges and opportunities
          presented by Artificial Intelligence (AI) in the educational landscape. Our
          consortium comprises esteemed universities and institutions from across Europe,
          each contributing their unique expertise and perspectives to this transformative
          initiative.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our approach is guided by the principles of collaboration, knowledge-sharing,
          and responsible innovation. We strive to create a future where AI is embraced as
          a powerful tool for enhancing educational experiences and preparing learners for
          the digital era.
        </p>
      </div>

      {/* Partnership Wrapper */}
      <div className="flex flex-wrap -m-4">
        {partners.map((partner, index) => (
          <PartnerWrapper key={index}>
            <Image
              alt={partner.name}
              className="flex-shrink-0 w-48 object-contain object-center sm:mb-0 mb-4"
              width={200}
              height={200}
              src={partner.imgSrc}
            />
            <div className="flex-grow pl-0 sm:pl-4">
              <h2 className="title-font font-medium text-lg text-gray-900">
                {partner.name}
              </h2>
              <h3 className="text-gray-500 mb-3">{partner.country}</h3>
              <p className="mb-4">{partner.description}</p>
              <SocialIcons links={partner.socialLinks} />
            </div>
          </PartnerWrapper>
        ))}
      </div>
    </section>
  );
}
