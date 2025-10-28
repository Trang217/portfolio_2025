import type { JSX } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./sections/Introduction";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Introduction />
      <Skills />
      <About />
      <Projects />
    </>
  );
}
