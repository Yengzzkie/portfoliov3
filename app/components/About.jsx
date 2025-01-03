import { BoxReveal } from "./ui/BoxReveal";
import { DotGrid } from "./ui/WaterDropGrid";
import DefaultButton from "./ui/Button";

const About = () => {
  return (
    <section className="flex flex-col w-full h-[70vh] max-w-5xl mx-auto px-4">
      <div className="flex items-center h-fit">
        <BoxReveal>
          <h1 className="text-2xl md:text-6xl lg:text-6xl font-[900]">
            About
            <span className="text-6xl font-bold text-violet-500">.</span>
          </h1>
        </BoxReveal>
        <div className="w-[80%] border border-zinc-500"></div>
      </div>
    </section>
  );
};

export default About;

{
  /* <BoxReveal>
<p className="relative z-30 text-sm md:text-lg text-[var(--primary-content)] max-w-[70%] lg:max-w-[50%] py-6 tracking-tight">
  I'm a self-taught developer who's been building software for the
  past two years to sharpen my skills. If you've got a project in
  mind or just want to chat about tech, feel free to reach out—I'd
  love to connect 🤝!
</p>
</BoxReveal> */
}
