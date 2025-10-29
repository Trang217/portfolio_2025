import { type JSX } from "react";
import Navbar from "../components/Navbar";
import Introduction from "../sections/Introduction";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Projects from "../sections/Projects";
import ThemeToggle from "../components/ThemeToggle";

function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      {/* Navbar  */}
      <Navbar />
      {/* Main Content */}
      <Introduction />
      <Skills />
      <About />
      <Projects />
      {/* Footer */}
    </div>
  );
}

export default Home;
