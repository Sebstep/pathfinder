import React from "react";
import Headings from "@/components/Doubleheadings";

export default function Home() {
  return (
    <section className="py-16">
      <div className="w-1/2 mx-auto">
        <Headings
          top="ARTISAN"
          bottom="AI Readiness Training for Insightful Systematic Adaptation and
          Navigation"
        />
        <p className="mb-8">
          ARTISAN is a learning program aimed at equipping students with the knowledge and
          skills required to utilize AI technologies effectively and responsibly. Our
          mission is to cultivate an understanding of AI, stimulate an entrepreneurial
          spirit, and enable students to seamlessly incorporate AI tools into their
          academic endeavors. Furthermore, ARTISAN is dedicated to deepening
          students&apos; comprehension of the ethical dimensions associated with AI usage,
          while also encouraging them to explore the vast possibilities that AI presents.
        </p>
        <p className="mb-8">
          Grounded in the principles of the European Union&apos;s DigComp 2.2 framework
          and aligned with the European Union&apos;s AI ethics guidelines of 2022, ARTISAN
          offers a wealth of training resources and materials designed for an engaging and
          thorough learning experience. By embarking on the ARTISAN learning journey,
          students will not only boost their AI literacy but also acquire the necessary
          competencies to effectively apply AI technologies in their studies,
          significantly enriching their educational journey.
        </p>
      </div>
    </section>
  );
}
