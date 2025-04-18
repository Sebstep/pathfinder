import React from "react";
import Headings from "@/components/DoubleHeadings";

export default function Guard() {
  return (
    <main className="">
      <section className="py-16">
        <div className="w-5/6 md:w-1/2 lg:max-w-2xl lg:w-full mx-auto">
          <Headings
            top="GUARD"
            bottom="Generative Universal Assistant for Resourceful Development"
          />
          <p className="mb-8">
            GUARD will be an innovative AI-powered toolkit designed to assist educators in
            implementing AI technology in lesson planning and teaching. This practical
            solution empowers teachers to apply the SAGE framework in their coursework,
            facilitating personalized learning experiences and igniting learners&apos;
            creativity.
          </p>
          <p className="mb-4">
            <b>Key Features of GUARD:</b>
          </p>
          <ul className="mb-8">
            <li>
              AI-driven lesson planning tools for creating engaging and interactive
              learning materials
            </li>
            <li>Intelligent feedback systems to streamline assessment processes </li>
            <li>
              Adaptive learning platforms that tailor content to individual student needs
              and preferences
            </li>
            <li>
              Data analytics and visualization tools for tracking student progress and
              identifying areas for improvement
            </li>
          </ul>
          <p className="mb-8">
            By leveraging the power of GUARD, educators can enhance their teaching
            practices, optimize student learning outcomes, and stay ahead of the curve in
            the rapidly evolving digital education landscape.
          </p>
        </div>
      </section>
    </main>
  );
}
