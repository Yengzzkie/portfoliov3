import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section className="px-4" id="contact">
      <div className="w-[95%] lg:w-[60%] border border-zinc-500 mx-auto"></div>
      <div className="bg-zinc-800 w-full lg:w-1/3 mx-auto my-8 rounded-lg shadow-lg p-6 lg:p-10">
        <h1 className="text-4xl lg:text-5xl font-[900] text-center">
          Contact
          <span className="text-6xl font-bold text-violet-500">.</span>
        </h1>
        <p className="mt-4 text-sm lg:text-base font-thin text-center">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <Link
            href="https://linkedin.com/in/manuel-gatchalian"
            className="text-violet-500 hover:underline font-semibold"
          >
            LinkedIn
          </Link>{" "}
          if that's more your speed.
        </p>

        <p className="mt-4 text-sm lg:text-base font-thin text-center">
          <EnvelopeIcon className="h-5 w-5 inline-block mr-1" />
          Email:{" "}
          <Link
            href="mailto:manuel.gatchalian@gmail.com"
            className="text-violet-500 hover:underline font-semibold"
          >
            manuel.gatchalian@gmail.com
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Contact;
