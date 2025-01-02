import { BoxReveal } from "./ui/BoxReveal";
import { DotGrid } from "./ui/WaterDropGrid";
import DefaultButton from "./ui/Button";

const About = () => {
  return (
    <div className="flex flex-col w-full h-[70vh] max-w-5xl mx-auto px-4">
      <div className="relative block overflow-hidden lg:overflow-visible">
        <div>
          <BoxReveal>
            <h1 className="relative z-30 text-4xl md:text-6xl lg:text-8xl font-[900] tracking-tight">
              Hi, I'm Manuel
              <span className="text-8xl font-bold text-violet-500">.</span>
            </h1>
          </BoxReveal>
          <BoxReveal>
            <h3 className="text-xl md:text-4xl font-normal">
              a{" "}
              <span className="font-bold text-violet-500">
                Full Stack Software Engineer
              </span>
            </h3>
          </BoxReveal>
          <BoxReveal>
            <p className="relative z-30 text-sm md:text-lg text-[var(--primary-content)] max-w-[70%] lg:max-w-[50%] py-6 tracking-tight">
              I'm a self-taught developer who's been building software for the
              past two years to sharpen my skills. If you've got a project in
              mind or just want to chat about tech, feel free to reach out—I'd
              love to connect 🤝!
            </p>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
};

export default About;
