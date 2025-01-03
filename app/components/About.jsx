import { BoxReveal } from "./ui/BoxReveal";
import { CodeSquareIcon, CurlyBracesIcon, ServerIcon } from "lucide-react";

const FE_TOOLS = [
  "HTML",
  "CSS",
  "Javascript",
  "TailwindCSS",
  "React",
  "Zustand",
  "Nodemailer",
  "ShadCN",
  "MaterialUI",
  "AceternityUI",
  "MagicUI",
  "Chakra UI",
  "Axios"
];

const BE_TOOLS = [
  "NextJS",
  "Next-auth",
  "NodeJS",
  "Express",
  "Postgres",
  "SQL",
  "Prisma",
  "MongoDB",
  "Mongoose"
];

const DEVOPS_TOOLS = [
  "Git",
  "Heroku",
  "AWS",
  "Supabase",
  "Netlify",
  "Vercel",
];

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
      id="about"
      className="flex flex-col w-full h-fit my-28 max-w-5xl mx-auto px-4"
    >
      <div className="flex items-center h-fit">
        <BoxReveal>
          <h1 className="text-4xl lg:text-6xl font-[900]">
            About
            <span className="text-6xl font-bold text-violet-500 mr-4">.</span>
          </h1>
        </BoxReveal>
        <div className="w-[80%] border border-zinc-500"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[auto,300px] gap-8 mt-8">
        <BoxReveal>
          <p className="text-sm lg:text-base">
            <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
              L
            </span>
            orem ipsum dolor sit amet consectetur adipisicing elit. Iste
            voluptate corrupti rerum officiis eum nobis veritatis perferendis
            recusandae ipsum cumque libero beatae reprehenderit, esse atque
            consequatur? Temporibus accusamus voluptatum aperiam facere, quaerat
            laudantium quod deleniti dolorem numquam blanditiis consectetur
            quidem sint expedita, asperiores magni dolor, rem et enim odit!
            Optio ea maxime temporibus obcaecati voluptas! Est, corporis
            nesciunt? Recusandae hic, vitae aliquid dicta aliquam aperiam vel
            eius? A reprehenderit soluta est fugiat ipsum eveniet, eligendi
            consectetur delectus eum vero. Consequuntur, fugiat ad voluptate
            nobis magni enim minima a accusamus, quo nihil non id tempore
            molestiae ex nemo labore. Sed, cumque atque dolorem itaque nobis
            deserunt, eveniet veniam debitis porro minus corrupti.
          </p>
        </BoxReveal>

        <div>
          {/* FRONTEND TOOLS */}
          <BoxReveal>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <CodeSquareIcon className="text-[var(--primary-dark)] bg-indigo-500 rounded-md mr-2" />{" "}
                <p className="text-lg font-semibold">Frontend Tools</p>
              </div>
              <div className="flex flex-wrap">
                {FE_TOOLS.map((tool) => (
                  <Badge text={tool} />
                ))}
              </div>
            </div>
          </BoxReveal>

          {/* BACKEND TOOLS */}
          <BoxReveal>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <CurlyBracesIcon className="text-[var(--primary-dark)] bg-indigo-500 rounded-md mr-2" />{" "}
                <p className="text-lg font-semibold">Backend Tools</p>
              </div>
              <div className="flex flex-wrap">
                {BE_TOOLS.map((tool) => (
                  <Badge text={tool} />
                ))}
              </div>
            </div>
          </BoxReveal>

          {/* DEVOPS TOOLS */}
          <BoxReveal>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <ServerIcon className="text-[var(--primary-dark)] bg-indigo-500 rounded-md mr-2" />{" "}
                <p className="text-lg font-semibold">Other Tools</p>
              </div>
              <div className="flex flex-wrap">
                {DEVOPS_TOOLS.map((tool) => (
                  <Badge text={tool} />
                ))}
              </div>
            </div>
          </BoxReveal>
        </div>
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
