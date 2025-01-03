import { BoxReveal } from "./ui/BoxReveal";
import { DotGrid } from "./ui/WaterDropGrid";
import DefaultButton from "./ui/Button";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center w-full h-[70vh] max-w-5xl mx-auto px-4">
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
          <BoxReveal>
            <DefaultButton
              cn={"px-4 py-3 bg-violet-500 hover:bg-violet-700 rounded-md"}
              text={"Contact Me"}
            />
          </BoxReveal>
        </div>
        <div className="absolute top-[50%] right-0 -translate-y-1/2 w-2/3 lg:w-fit z-10">
          <DotGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
