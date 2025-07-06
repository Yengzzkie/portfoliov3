import Header from "./ui/Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects"
import Contact from "./Contact";

const Main = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Manuel Gatchalian. All rights reserved.
      </footer>
    </main>
  );
};

export default Main;
