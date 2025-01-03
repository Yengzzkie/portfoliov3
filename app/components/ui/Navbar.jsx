"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Define the navigation tabs
const tabs = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((tab) => document.getElementById(tab.toLowerCase()));
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSelected(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
            }
          });
        },
        { threshold: .3 }
      );

      sections.forEach((section) => section && observer.observe(section));

      return () => observer.disconnect();
    };

    handleScroll();
  }, []);

  return (
    <div className="sticky top-0 left-0 h-screen w-fit bg-slate-900 flex flex-col items-center gap-2 z-[999]">
      {tabs.map((tab) => (
        <Chip
          key={tab}
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          link={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, setSelected, link }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-4 py-0.5 relative`}
    >
      <a href={`#${link.toLowerCase()}`}>
        <span className="relative z-10 writing-vertical my-6">{text}</span>
      </a>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-700 to-zinc-900 border-r-4 border-violet-500"
        />
      )}
    </button>
  );
};

export default Navbar;
