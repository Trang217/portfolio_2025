import type { JSX } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./sections/Introduction";

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Introduction />
    </>
  );
}
