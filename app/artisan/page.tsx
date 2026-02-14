import React from "react";
import Headings from "@/components/DoubleHeadings";

export default function Artisan() {
  return (
    <section className="py-16">
      <div className="w-5/6 md:w-1/2 lg:max-w-2xl lg:w-full mx-auto">
        <Headings
          top="ARTISAN"
          bottom="AI Readiness Training for Insightful Systematic Adaptation and
          Navigation"
        />
        <div className="mb-8 flex flex-wrap gap-2">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
            Status: Coming soon
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            For: Educators and Students
          </span>
        </div>
        <p className="mb-8 leading-relaxed">
          ARTISAN is currently in development. Its domain will be announced.
        </p>
        <p className="mb-8 leading-relaxed">
          ARTISAN is a comprehensive competency-based learning program designed to deepen
          students&apos; knowledge and understanding of effectively and responsibly using
          AI technology. This program empowers students with AI literacy, fosters a growth
          mindset, and cultivates essential skills for continuous learning and
          adaptability.
        </p>
        <p className="mb-4">
          <b>Key Features of ARTISAN:</b>
        </p>
        <ul className="mb-8">
          <li>
            Foundational courses on AI principles, applications, and ethical
            considerations
          </li>
          <li>
            Hands-on projects and case studies to apply AI concepts in real-world
            scenarios
          </li>
          <li>
            Entrepreneurship modules to nurture innovation and develop business acumen
          </li>
          <li>
            Career readiness workshops and mentorship opportunities for professional
            development
          </li>
        </ul>
        <p className="mb-8">
          By participating in ARTISAN, students gain a competitive edge in the job market,
          develop an entrepreneurial mindset, and become agents of change in the digital
          era, prepared to tackle complex challenges and drive innovation.
        </p>
      </div>
    </section>
  );
}
