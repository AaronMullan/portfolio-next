import { About } from "@/containers/About";
import { Footer } from "@/containers/Footer";
import { Hero } from "@/containers/Hero";
import { Projects } from "@/containers/Projects";
import { Websites } from "@/containers/Websites";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-items-center">
      <main className="mb-8 flex w-full flex-col items-center">
        <Hero />
        <About />
        <Websites />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
