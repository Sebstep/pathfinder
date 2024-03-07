import React from "react";
import Rhf from "@/components/forms/Rhf";
import Typography from "@mui/material/Typography";
import Headings from "@/components/Doubleheadings";

export default function Home() {
  return (
    <main className="">
      <section className="py-16">
        <div className="w-1/2 mx-auto">
          <Headings
            top="GUARD"
            bottom="Generative Universal Assistant for Resourceful Development"
          />
          <p className="mb-8">
            GUARD is an AI-powered toolkit that equips teachers with the necessary
            resources and tools to incorporate AI technology into lesson planning and
            teaching practices effectively. By harnessing the capabilities of AI, GUARD
            offers a practical and user-friendly solution for educators to integrate the
            SAGE framework into their curriculum seamlessly. This enables personalised
            learning experiences and nurtures students&apos; critical thinking,
            problem-solving, and creativity.
          </p>
          <p className="mb-8">
            With GUARD, educators can establish dynamic and engaging learning environments
            that cater to individual learners&apos; unique needs and preferences,
            fostering active participation and enhancing learning outcomes.
          </p>
        </div>
      </section>

      <div className="container m-auto">
        <Typography variant="h1">Chat</Typography>
        <Rhf />
      </div>
    </main>
  );
}
