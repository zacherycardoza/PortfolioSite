import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("../components/VantaBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <VantaBackground />
      </div>

      <div className="relative z-10 text-white">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>

    // <div className="relative min-h-screen overflow-hidden bg-black">
    //   <div className="relative z-10 text-white">
    //     <Navbar />
    //     <Hero />
    //     <Projects />
    //     <About />
    //     <Contact />
    //     <Footer />
    //   </div>
    // </div>
  );
}
