import Cards from "@/components/Cards";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full p-10 bg-custom-gradient bg-custom-bg-color bg-blend-multiply ">
     <header className="text-center flex flex-col gap-10 mb-10 z-50 relative">
      <Link href="https://devchallenges.io/" target="_blank">
      <h1 className="text-4xl text-transparent bg-clip-text bg-custom-gradient-header font-extrabold drop-shadow-lg ">
            DevChallenges Platform Projects
        </h1>
        </Link>
        <p className="text-lg text-black text-opacity-70 tracking-wide max-w-2xl mx-auto drop-shadow-md transition-transform duration-500 ease-in-out transform font-medium">
            Welcome to My DevChallenges projects! Here, you&apos;ll find a collection of projects I completed as part of the DevChallenges platform. Each project demonstrates my skills in responsive design, JavaScript development, front-end technologies, and full-stack development. Explore the projects, view live demos, and check out the source code on GitHub.
        </p>
    </header>
        <Cards/>
    </main>
  );
}
