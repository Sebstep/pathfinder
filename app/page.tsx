import Image from "next/image";
import Link from "next/link";
import { GiWizardStaff, GiBorderedShield, GiBroadsword } from "react-icons/gi";
import InstitutionLogos from "@/components/Institutionlogos";
import Featurecard from "@/components/Featurecard";
import Headings from "@/components/Doubleheadings";

const projectDeliverables = [
  {
    title: "SAGE",
    description: "Strategies for AI-Guided Education",
    icon: (
      <GiWizardStaff
        size={32}
        aria-hidden="true"
      />
    ),
    link: "https://sage.ai-pathfinder.eu",
    target: "_blank",
  },
  {
    title: "GUARD",
    description: "Generative Universal Assistant for Resourceful Development",
    icon: (
      <GiBorderedShield
        size={32}
        aria-hidden="true"
      />
    ),
    link: "/guard",
  },
  {
    title: "ARTISAN",
    description:
      "AI Readiness Training for Insightful Systematic Adaptation and Navigation",
    icon: (
      <GiBroadsword
        size={32}
        aria-hidden="true"
      />
    ),
    link: "/artisan",
  },
];

const Hero = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Left Side */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
          Welcome to the
          <br />
          Erasmus+ Pathfinder Project
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          Pioneering AI Technology in Higher Education to Facilitate Innovation and
          Nurture the Development of Entrepreneurial Resources
        </p>
        <Link
          href="#deliverables"
          className="inline-block bg-eu-blue hover:bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg transition">
          Learn More
        </Link>
      </div>

      {/* Right Side */}
      <div className="relative w-full md:w-1/2 max-w-lg">
        <Image
          src="/images/hero-image.jpeg"
          alt="Hero Image"
          width={600}
          height={400}
          className="rounded-3xl shadow-lg object-cover"
          priority
        />
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />

      {/* <!-- Objectives Section --> */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto space-y-6 px-6">
          <Headings
            top="PROJECT OBJECTIVE"
            bottom="Empowering Education Through AI"
          />
          <p className="text-lg text-gray-800">
            Pathfinder is an Erasmus+ project that aims to advance the understanding and
            adoption of Artificial Intelligence (AI) technology in higher education. We
            equip educators and students with the knowledge, resources, and tools to
            facilitate the effective and responsible integration of AI in teaching and
            learning.
          </p>

          <p className="text-lg text-gray-800">
            Our mission is to foster digital readiness, promote entrepreneurial
            innovation, and enhance employability by:
          </p>

          <ul className="text-left space-y-2 text-gray-800 list-disc list-inside">
            <li>Developing strategic guidelines for AI integration (SAGE)</li>
            <li>
              Creating AI-based tools for lesson planning and teaching support (GUARD)
            </li>
            <li>
              Providing a learning journey to enhance students&apos; AI literacy (ARTISAN)
            </li>
          </ul>
          <p className="text-lg text-gray-800">
            Explore our website to learn more about our innovative approach to
            transforming higher education through AI.
          </p>
        </div>
      </section>

      {/* Deliverables Section */}
      <section
        className="py-16 bg-gradient-to-b from-white to-blue-50"
        id="deliverables">
        <div className="container px-5 mx-auto">
          <Headings
            top="PROJECT DELIVERABLES"
            bottom="Meet the Pathfinders"
          />
          <div className="flex flex-wrap -m-4">
            {projectDeliverables.map((feature, index) => (
              <Featurecard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                link={feature.link}
                target={feature.target}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section className="py-16 mx-auto ">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Headings
            top="PROJECT CONSORTIUM"
            bottom="Participating Organizations"
          />
          <div className="text-center">
            <InstitutionLogos />
            <p className="text-lg text-gray-800 mt-8 mb-8">
              Feel free to get in touch with us for more information.
            </p>
            <Link
              href="/about"
              className="bg-eu-blue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
