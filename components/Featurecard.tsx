import React from "react";
import Link from "next/link";

type FeaturecardProps = {
  title: string;
  description: string;
  icon: any;
  link: string;
};

export default function Featurecard(props: FeaturecardProps) {
  return (
    <Link href={props.link} className="p-4 md:w-1/3 ">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col group border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300">
        <div className="flex items-center mb-3 p-2">
          <div className="w-12 h-12 mr-4 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0 transition-transform group-hover:-translate-y-1 motion-reduce:transform-none">
            {props.icon}
          </div>
          <h3 className="text-2xl font-medium mb-4 text-left">{props.title}</h3>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{props.description}</p>
          <p className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More -&gt;
          </p>
        </div>
      </div>
    </Link>
  );
}
