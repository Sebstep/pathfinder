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
          The SAGE framework offers educators a detailed roadmap to navigate AI-guided
          education. It provides a step-by-step guide that supports AI technology
          integration and promotes a deep understanding of its impact on student learning.
        </p>
        <p className="mb-8 leading-relaxed">
          The SAGE framework encourages educators to embrace innovation by exploring new
          teaching methodologies and tools that capitalise on AI advancements. This
          approach enhances the learning experience and prepares students for the
          challenges and opportunities of the future by equipping them with essential
          skills such as problem-solving and critical thinking.
        </p>
      </div>
    </section>
  );
}
