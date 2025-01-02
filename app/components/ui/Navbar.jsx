"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Home", "Search", "About", "FAQ"];

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="sticky top-0 left-0 h-screen w-fit bg-slate-900 flex flex-col items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-4 py-0.5 relative`}
    >
      <span className="relative z-10 writing-vertical my-6">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-700 to-zinc-900 border-r-4 border-violet-500"
        ></motion.span>
      )}
    </button>
  );
};

export default Navbar;