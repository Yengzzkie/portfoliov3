export const FEATURED_PROJECTS = [
  {
    title: "YENGFLIXv3",
    name: (
      <>
        <span className="text-red-500 font-bold">YENGFLIX</span>
        <span className="text-yellow-600 font-thin">v3</span>
      </>
    ),
    link: "https://yengflix.com/",
    description:
      "Yengflix v3 is a full-stack streaming platform offering a sleek and modern interface for enjoying seamless video content.",
    img: "/yengflixv3.png",
    overview: (
      <>
        This is the third and full-stack version of Yengflix, built as an
        attempt to explore Next.js&apos;s full-stack features. It now includes
        user registration, authentication, and favorite list persistence through
        a database. It has garnered 100+ user registrations from different
        countries on first day of launch and still growing. The first and second
        version can be found{" "}
        <a
          href="https://yengflix-deprecated.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          here
        </a>{" "}
        and{" "}
        <a
          href="https://yengflixv2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          here
        </a>
        , respectively.
      </>
    ),
    tools: [
      "NextJS",
      "next-auth",
      "Nodemailer",
      "jsonwebtoken",
      "bcryptjs",
      "prisma",
      "PostgreSQL",
      "TailwindCSS",
      "Zustand",
      "ShadCN",
      "Material-tailwind",
      "AceternityUI",
      "MagicUI",
      "Axios",
      "Vercel",
      "TMDB API",
    ],
  },
  {
    title: "AnimHey!",
    name: (
      <>
        <span className="text-yellow-600 font-bold">Anim</span>
        <span className="text-red-500">Hey!</span>
      </>
    ),
    link: "https://animhey.netlify.app/",
    description:
      "AnimHey! is an anime streaming platform offering HD quality videos with a user-friendly interface",
    img: "/animhey.png",
    overview:
      "I built this anime streaming platform as a request from my daughter, who loves watching anime, while also to explore Tailwind CSS and integrating prebuilt components like those from Flowbite, achieving over 3,000 page visits since its launch.",
    tools: [
      "ReactJS",
      "react-router-dom",
      "Axios",
      "FlowbiteCSS",
      "hls.js",
      "TailwindCSS",
      "Websocket",
      "Supabase",
      "NodeJS",
      "Express",
      "MongoDB",
      "Consumet API",
      "Netlify",
    ],
  },
  {
    title: "Pasalubong 905",
    name: (
      <>
        <span className="text-zinc-300 font-bold">Pasalubong</span>
        <span className="text-red-500">9</span>
        <span className="text-yellow-500">0</span>
        <span className="text-blue-500">5</span>
      </>
    ),
    link: "https://pasalubong905-fullstack.vercel.app/",
    description:
      "Restaurant website with an admin login, featuring an integrated order creation system and printing functionality.",
    img: "/pasalubong905.png",
    overview:
      "This is a website I built for a local Filipino restaurant managed by my wife, aiming to replace their manual phone order tracking system ( as they still do it by handwriting ) with an integrated order creation and printing feature. This app is still under development.",
    tools: [
      "NextJS",
      "next-auth",
      "TailwindCSS",
      "Zustand",
      "MaterialUI",
      "AceternityUI",
      "MagicUI",
      "Axios",
      "prisma",
      "Supabase",
      "Vercel",
    ],
  },
];
