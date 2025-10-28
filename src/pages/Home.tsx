import { type JSX } from "react";
import Navbar from "../components/Navbar";
import Introduction from "../sections/Introduction";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Projects from "../sections/Projects";

function Home(): JSX.Element {
  return (
    <>
      {/* Theme Toggle */}
      {/* Background Effect */}
      {/* Navbar  */}
      <Navbar />
      {/* Main Content */}
      <Introduction />
      <Skills />
      <About />
      <Projects />
      {/* Footer */}
    </>
  );
}

export default Home;
