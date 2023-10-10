import React from "react";
import Link from "next/link";
import { GiWizardStaff } from "react-icons/gi";

type FeaturecardProps = {
  title: string;
  description: string;
  icon: any;
  link: string;
};

export default function Featurecard(props: FeaturecardProps) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {props.icon}
          </div>
          <h3>{props.title}</h3>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            {props.description}
          </p>
          <Link href={props.link} className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
