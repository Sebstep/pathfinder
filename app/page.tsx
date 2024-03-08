import Image from "next/image";
import Link from "next/link";
import { GiWizardStaff, GiBorderedShield, GiBroadsword } from "react-icons/gi";
import InstitutionLogos from "@/components/Institutionlogos";
import Featurecard from "@/components/Featurecard";
import Headings from "@/components/Doubleheadings";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}

      <section className="py-16">
        <div className="container mx-auto px-5 flex flex-col items-center md:flex-row">
          {/* Left Side */}
          <div className="text-center flex flex-col items-center md:pr-16 md:items-start md:text-left lg:flex-grow md:w-1/2 lg:pr-24">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Welcome to the
              <br />
              Erasmus+ Pathfinder Project
            </h1>
            <p className="mb-8 leading-relaxed">
              Pioneering AI Technology in Higher Education to Facilitate Innovation and
              Nurture the Development of Entrepreneurial Resources
            </p>
          </div>

          {/* Right Side */}
          <div className="w-5/6 md:w-1/2 lg:max-w-lg lg:w-full">
            <Image
              src="/images/hero-image.jpeg"
              alt="Hero Image"
              width={600}
              height={400}
              className="object-cover object-center rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* <!-- Objectives Section --> */}
      <section className="py-16 bg-slate-100">
        <div className="w-5/6 md:w-1/2 lg:max-w-2xl lg:w-full mx-auto">
          <Headings
            top="PROJECT OBJECTIVE"
            bottom="Empowering Education Through AI"
          />
          <p className="mb-8">
            Pathfinder is an Erasmus+ project that aims to advance the understanding and
            adoption of Artificial Intelligence (AI) technology in higher education. We
            equip educators and students with the knowledge, resources, and tools to
            facilitate the effective and responsible integration of AI in teaching and
            learning.
          </p>

          <p className="mb-4">
            Our mission is to foster digital readiness, promote entrepreneurial
            innovation, and enhance employability by:
          </p>

          <ul className="mb-8">
            <li>Developing strategic guidelines for AI integration (SAGE)</li>
            <li>
              Creating AI-based tools for lesson planning and teaching support (GUARD)
            </li>
            <li>
              Providing a learning journey to enhance students&apos; AI literacy (ARTISAN)
            </li>
          </ul>
          <p className="mb-8">
            Explore our website to learn more about our innovative approach to
            transforming higher education through AI.
          </p>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16">
        <div className="container px-5 mx-auto">
          <Headings
            top="PROJECT DELIVERABLES"
            bottom="Meet the Pathfinders"
          />
          <div className="flex flex-wrap -m-4">
            <Featurecard
              title="SAGE"
              description="Strategies for AI-Guided Education"
              icon={<GiWizardStaff size={24} />}
              link="/sage"
            />
            <Featurecard
              title="GUARD"
              description="Generative Universal Assistant for Resourceful Development"
              icon={<GiBorderedShield size={24} />}
              link="/guard"
            />
            <Featurecard
              title="ARTISAN"
              description="AI Readiness Training for Insightful Systematic Adaptation
                    and Navigation"
              icon={<GiBroadsword size={24} />}
              link="/artisan"
            />
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section className="py-16 mx-auto">
        <Headings
          top="PROJECT CONSORTIUM"
          bottom="Participating Organizations"
        />
        <div className="text-center">
          <InstitutionLogos />
          <p className="my-8">Feel free to get in touch with us for more information.</p>
          <Link
            href="/about"
            className="bg-eu-blue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
