import React from "react";
import Link from "next/link";

const companyLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Terms of Service",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Cookie Policy",
    href: "#",
  },
];

const solutionLinks = [
  {
    title: "SAGE",
    href: "/sage",
  },
  {
    title: "GUARD",
    href: "/guard",
  },
  {
    title: "ARTISAN",
    href: "/artisan",
  },
];

const partnershipLinks = [
  {
    title: "University of Liechtenstein (FL)",
    href: "https://www.uni.li/en/",
  },
  {
    title: "LAB University of Applied Sciences (FI)",
    href: "https://lab.fi/en/",
  },
  {
    title: "University of Dubrovnik (HR)",
    href: "https://www.unidu.hr/eng/",
  },
  {
    title: "Formatio Private School (FL)",
    href: "https://www.formatio.li/en/",
  },
];

function Logo() {
  return (
    <div className="w-full text-lg font-extrabold md:w-fit md:text-left">
      <span className="text-eu-blue">Erasmus+ Pathfinder</span>{" "}
    </div>
  );
}

export default function MultiColumns() {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12">
        <div className="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
          <Logo />
          <p className="text-sm text-slate-600">
            Pioneering AI Technology in Higher Education to Facilitate Innovation and
            Nurture the Development of Entrepreneurial Resources
          </p>
          <p className="text-sm text-slate-600">
            Project:{" "}
            <a href="https://erasmus-plus.ec.europa.eu/projects/search/details/2023-2-LI01-KA220-HED-000178579">
              2023-2-LI01-KA220-HED-000178579
            </a>
          </p>
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Pathfinder Project. All rights reserved.
          </p>
        </div>
        {/* <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold">Company</div>
          <ul className="text-sm">
            {companyLinks.map(({ title, href }, index) => (
              <li className="pt-3" key={index}>
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold">Deliverables</div>
          <ul className="text-sm">
            {solutionLinks.map(({ title, href }, index) => (
              <li
                className="pt-3"
                key={index}>
                <Link
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
          <div className="text-sm font-semibold text-slate-600">Project Consortium</div>
          <ul className="text-sm">
            {partnershipLinks.map(({ title, href }, index) => (
              <li
                className="pt-3"
                key={index}>
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
