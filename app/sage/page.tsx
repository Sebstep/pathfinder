import React from "react";
import Headings from "@/components/Doubleheadings";

export default function Home() {
  return (
    <section className="py-16">
      <div className="w-5/6 md:w-1/2 lg:max-w-2xl lg:w-full mx-auto">
        <Headings
          top="SAGE"
          bottom="Strategies for AI-Guided Education"
        />
        <p className="mb-8 leading-relaxed">
          SAGE is a comprehensive and scalable instructional framework designed to guide
          educators in the effective and responsible integration of AI tools into higher
          education teaching.
        </p>
        <p className="mb-8 leading-relaxed">
          This strategic framework serves as a blueprint for combining artificial
          intelligence technologies with innovative pedagogical approaches, improving
          digital teaching and learning practices across various courses.
        </p>

        <p className="mb-4 leading-relaxed">
          <b>Key Features of SAGE:</b>
        </p>
        <p className="mb-8 leading-relaxed">
          <ul className="list-disc list-outside ml-4">
            <li>
              Practical guidelines for incorporating AI into curriculum development and
              lesson planning Best practices for leveraging AI to personalize learning
              experiences and enhance student engagement
            </li>
            <li>
              Strategies for fostering critical thinking, problem-solving, and creativity
              through AI-assisted education
            </li>
            <li>
              Ethical considerations and responsible AI practices to ensure inclusive and
              unbiased learning environments
            </li>
          </ul>
        </p>
        <p className="mb-8 leading-relaxed">
          By adopting SAGE, educators can harness the power of AI to revolutionize their
          teaching methods, creating dynamic and interactive learning experiences that
          prepare students for the digital age.
        </p>
      </div>
    </section>
  );
}
