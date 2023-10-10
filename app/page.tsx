import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GiWizardStaff, GiBorderedShield, GiBroadsword } from "react-icons/gi";
import InstitutionLogos from "@/components/Institutionlogos";
import Box from "@mui/material/Box";
import Featurecard from "@/components/Featurecard";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}

      <section className="text-gray-600 body-font py-16">
        <div className="container mx-auto flex px-5 flex-col md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to the Pathfinder Project
            </h1>
            <p className="mb-8 leading-relaxed">
              Pioneering AI Technology in Higher Education to Facilitate
              Innovation and Nurture the Development of Entrepreneurial
              Resources
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/images/AdobeStock_622648834.jpeg"
              alt="Hero Image"
              width={600}
              height={400}
              className="object-cover object-center rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font">
              Meet the Pathfinders
            </h1>
          </div>
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

      {/* Experimental */}
      <section className="py-12">
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left px-12">
          <Link
            href="/sage"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="">
              SAGE{" "}
              <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                <GiWizardStaff />
              </span>
            </h3>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Strategies for AI-Guided Education.
            </p>
          </Link>
          <Link
            href="/guard"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="">
              GUARD{" "}
              <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                <GiBorderedShield />
              </span>
            </h3>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Generative Universal Assistant for Resourceful Development.
            </p>
          </Link>
          <Link
            href="/artisan"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="">
              ARTISAN{" "}
              <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                <GiBroadsword />
              </span>
            </h3>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              AI Readiness Training for Insightful Systematic Adaptation and
              Navigation.
            </p>
          </Link>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className="mx-auto py-12 bg-gray-300">
        <div className="text-center">
          <h2>About Us</h2>
        </div>
        <div className="text-center">
          <InstitutionLogos />
          <p className="mb-8">
            Feel free to get in touch with us for more information.
          </p>

          <Link
            href="#about"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

// <div>
//   <div>
//     <Typography variant="h1">PATHFINDER</Typography>
//   </div>
//   <div>
//     <Typography variant="body1">
//       Pioneering AI Technology in Higher Education to Facilitate Innovation
//       and Nurture the Development of Entrepreneurial Resources
//     </Typography>
//   </div>
//   <div>
//     <Typography variant="body1">Test test</Typography>
//   </div>
// </div>

// <main className="flex min-h-screen flex-col items-center justify-between p-24">

//   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get started by editing&nbsp;
//       <code className="font-mono font-bold">app/page.tsx</code>
//     </p>
//     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//       <a
//         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{' '}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           className="dark:invert"
//           width={100}
//           height={24}
//           priority
//         />
//       </a>
//     </div>
//   </div>

//   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//     <Image
//       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority
//     />
//   </div>

//   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//     <a
//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Docs{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Find in-depth information about Next.js features and API.
//       </p>
//     </a>

//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Learn{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Learn about Next.js in an interactive course with&nbsp;quizzes!
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         Templates{' '}
//         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Explore the Next.js 13 playground.
//       </p>
//     </a>

//   </div>
// </main>
