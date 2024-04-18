import React from "react";
import Rhf from "@/components/forms/Rhf";
import Typography from "@mui/material/Typography";
import Headings from "@/components/Doubleheadings";

export default function Home() {
  return (
    <main className="">
      <section className="py-16">
        <div className="w-5/6 md:w-1/2 lg:max-w-2xl lg:w-full mx-auto">
          <Headings
            top="GUARD"
            bottom="Generative Universal Assistant for Resourceful Development"
          />
          <p className="mb-8 leading-relaxed">
            GUARD is an innovative AI-powered toolkit designed to assist educators in
            implementing AI technology in lesson planning and teaching. This practical
            solution empowers teachers to apply the SAGE framework in their coursework,
            facilitating personalized learning experiences and igniting learners&apos;
            creativity.
          </p>
          <p className="mb-4 leading-relaxed">
            <b>Key Features of GUARD:</b>
          </p>
          <p className="mb-8 leading-relaxed">
            <ul className="list-disc list-outside ml-4">
              <li>
                AI-driven lesson planning tools for creating engaging and interactive
                learning materials
              </li>
              <li>Intelligent feedback systems to streamline assessment processes </li>
              <li>
                Adaptive learning platforms that tailor content to individual student
                needs and preferences
              </li>
              <li>
                Data analytics and visualization tools for tracking student progress and
                identifying areas for improvement
              </li>
            </ul>
          </p>
          <p className="mb-8 leading-relaxed">
            By leveraging the power of GUARD, educators can enhance their teaching
            practices, optimize student learning outcomes, and stay ahead of the curve in
            the rapidly evolving digital education landscape.
          </p>
        </div>
      </section>

      {/* <div className="container m-auto">
        <Typography variant="h1">Chat</Typography>
        <Rhf />
      </div> */}
    </main>
  );
}
