import React from "react";
import Link from "next/link";

type FeaturecardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  target?: string;
};

export default function Featurecard({
  title,
  description,
  icon,
  link,
  target="_self",
}: FeaturecardProps) {
  return (
    <Link
      href={link}
      aria-label={`Learn more about ${title}`}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="block w-full md:w-1/3 p-4">
      <div className="flex flex-col h-full rounded-lg p-8 group border border-gray-200 backdrop-blur-lg bg-white/30 shadow-lg transition-all hover:shadow-xl hover:scale-105 hover:bg-white/40">
        <div className="flex items-center mb-4">
          <div className="w-14 h-14 mr-4 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md transition-transform group-hover:scale-105">
            {icon}
          </div>
          <h3 className="text-2xl font-medium text-gray-900">{title}</h3>
        </div>
        <div className="flex-grow">
          <p className="text-base leading-relaxed text-gray-700">{description}</p>
          <p className="mt-3 text-blue-600 inline-flex items-center font-medium group-hover:underline">
            Learn More &rarr;
          </p>
        </div>
      </div>
    </Link>
  );
}
