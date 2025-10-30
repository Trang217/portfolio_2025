import { useEffect, useState, type JSX } from "react";
import { links } from "../data";
import { cn } from "../lib/utils";
function Navbar(): JSX.Element {
  const [isScrolled, setIsCrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "w-full fixed z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop:-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="align-element py-4 sm:flex sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          My <span className="text-emerald-600">Portfolio</span>
        </h2>

        {/* Desktop Nav */}
        <div className="hidden sm:flex sm:gap-x-3">
          {links.map((link) => {
            const { id, text, href } = link;
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>

        {/* Mobile Nav */}
      </div>
    </nav>
  );
}

export default Navbar;
