import type { JSX } from "react";
import { FaFacebook, FaGitSquare, FaLinkedin } from "react-icons/fa";
import heroImg from "../images/hero.svg";

function Introduction(): JSX.Element {
  return (
    <div className=" bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="mt-4 text-7xl font-bold tracking-wide">I am Trang</h1>
          <p className="text-3xl capitalize text-slate-700 tracking-wide">
            Fullstack Developer
          </p>

          <p className="mt-2 text-lg capitalize text-slate-700 tracking-wide">
            Turning ideas into interactive reality
          </p>

          <div className="flex gap-x-4 mt-4">
            <a className="" href="#">
              <FaGitSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>

            <a className="" href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a className="" href="#">
              <FaFacebook className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
}
export default Introduction;
