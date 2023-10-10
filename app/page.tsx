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

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8">
              <h1 className="text-5xl font-semibold mb-4">
                Welcome to the Pathfinder Project
              </h1>
              <p className="text-lg mb-6">
                We provide insights and best practices for using AI in
                education.
              </p>
              <Button variant="contained" color="primary" href="#">
                Get Started
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/AdobeStock_622648834.jpeg"
                alt="Hero Image"
                width={600}
                height={400}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Feature Cards */}
      <section className="bg-gray-100 py-16">
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Meet the Pathfinders
          </h2>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow">
                  <Typography variant="h5" component="div">
                    SAGE <GiWizardStaff className="inline" />
                  </Typography>
                  <p>Strategies for AI-Guided Education</p>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href="#sage"
                    className="top-2"
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow">
                  <Typography variant="h5" component="div">
                    GUARD <GiBorderedShield className="inline" />
                  </Typography>
                  <p>
                    Generative Universal Assistant for Resourceful Development
                  </p>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href="#guard"
                    className="top-2"
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow">
                  <Typography variant="h5" component="div">
                    ARTISAN <GiBroadsword className="inline" />
                  </Typography>
                  <p>
                    AI Readiness Training for Insightful Systematic Adaptation
                    and Navigation
                  </p>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href="#artisan"
                    className="top-2"
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Experimental */}
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left px-12">
        <Link
          href="/sage"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            SAGE{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              <GiWizardStaff />
            </span>
          </h2>
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
          <h2 className="mb-3 text-2xl font-semibold">
            GUARD{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              <GiBorderedShield />
            </span>
          </h2>
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
          <h2 className="mb-3 text-2xl font-semibold">
            ARTISAN{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              <GiBroadsword />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            AI Readiness Training for Insightful Systematic Adaptation and
            Navigation.
          </p>
        </Link>
      </div>

      {/* <!-- About Section --> */}
      <section id="about" className="py-12 bg-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            libero justo.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* SAGE Section */}
      <section id="sage" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">SAGE</h2>
          <p>Test</p>
        </div>
      </section>

      {/* GUARD Section */}
      <section id="guard" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">GUARD</h2>
          <p>Test</p>
        </div>
      </section>

      {/* ARTISAN Section */}
      <section id="artisan" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">ARTISAN</h2>
          <p>Test</p>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">
            Feel free to get in touch with us for more information.
          </p>
          {/* <!-- Add your contact form or contact information here --> */}
        </div>
      </section>

      {/* <!-- Institution Logos --> */}
      <section className="bg-gray-300 py-12">
        <InstitutionLogos />
        {/* TODO: Insert Erasmus Logo here */}
      </section>
    </div>

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
  );
}
