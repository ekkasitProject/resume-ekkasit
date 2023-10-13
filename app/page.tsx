import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="relative">
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
