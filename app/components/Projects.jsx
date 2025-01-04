import { BoxReveal } from "./ui/BoxReveal";
import { AnimatedCard } from "./ui/3DCard";
import { FEATURED_PROJECTS } from "../utils/featured";

const Badge = ({ text }) => {
  return (
    <span className="text-xs bg-[var(--primary-light)] px-1 py-0.5 mr-1.5 mb-1 rounded-sm">
      {text}
    </span>
  );
};

const About = () => {
  return (
    <section
      id="projects"
      className="flex flex-col w-full h-fit my-10 lg:my-24 max-w-5xl mx-auto px-4 overflow-hidden"
    >
      <div className="flex items-center h-fit">
        <div className="w-[80%] border border-zinc-500 pl-4"></div>
        <BoxReveal>
          <h1 className="text-4xl lg:text-6xl font-[900]">
            Projects
            <span className="text-6xl font-bold text-violet-500 mr-4">.</span>
          </h1>
        </BoxReveal>
      </div>

      <div className="mt-10">
        <BoxReveal>
          <p className="text-sm lg:text-base">
            <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
              T
            </span>
            his section contains all my hardworked projects where each of them I
            spent countless sleepless nights to hone my coding skills from as
            simple as 'Weather app' to a more complex one like a fullstack
            streaming app which I recently launched 'Yengflix v3'.
          </p>
        </BoxReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4 lg:gap-8 lg:mt-20">
        {FEATURED_PROJECTS.map((project) => (
          <div className="flex flex-col items-center px-18">
            <AnimatedCard
              title={project.title}
              name={project.name}
              link={project.link}
              description={project.description}
              img={project.img}
            />
            <div className="max-w-[350px]">
              <div className="flex items-center">
                <h1 className="font-bold relative text-nowrap">Overview</h1>
                <div className="w-[80%] border border-zinc-500 pl-4 ml-2"></div>
              </div>

              <BoxReveal>
                <p className="text-sm text-[var(--primary-content)] text-left">
                  {project.overview || ""}
                </p>
              </BoxReveal>

              <div className="flex items-center mt-4">
                <h1 className="font-bold relative text-nowrap">Tools used</h1>
                <div className="w-[80%] border border-zinc-500 pl-4 ml-2"></div>
              </div>

              <BoxReveal>
                <div className="flex flex-wrap">
                  {project.tools.map((tool) => (
                    <Badge text={tool} />
                  ))}
                </div>
              </BoxReveal>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold mt-10">Other Projects</h1>
      <div className="mt-6">
        <BoxReveal>
          <p className="text-sm lg:text-base">
            <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
              I
            </span>
            decided to include the small projects I build from when I was just learning to code to remind myself of how far I am on my coding journey ("because Impostor syndrome still strikes me from time to time 😭")
          </p>
        </BoxReveal>
      </div>
    </section>
  );
};

export default About;
