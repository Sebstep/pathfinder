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
          ARTISAN aims to promote AI literacy, foster an entrepreneurial mindset, and
          effectively empower students to integrate AI technology into their study
          practices. Additionally, ARTISAN seeks to enhance students&apo; understanding of
          the ethical implications of AI and encourage exploration of AI&apo;s potential.
        </p>
        <p className="mb-8">
          This innovative toolkit will be based on the DigComp 2.2 framework and grounded
          in the EU&apo;s 2022 AI ethics guidelines and offer students extensive training
          resources and materials to facilitate comprehensive learning. Utilising the
          ARTISAN learning journey will empower students to enhance their AI literacy and
          equip them with the skills needed to effectively integrate AI technology into
          their study practices, thus enhancing their overall educational experience.
        </p>
      </div>
    </section>
  );
}
