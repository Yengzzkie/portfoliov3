"use client"
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandCodepen,
} from "@tabler/icons-react";
import DefaultButton from "./Button";
import Link from "next/link";
import { downloadResume } from "@/app/utils/downloadResume";

const Header = () => {

  return (
    <div className="sticky top-0 flex items-center w-full px-4 py-6 bg-zinc-900/50 z-20 backdrop-blur-md">
      <div className="flex justify-between gap-4 w-fit ml-4">
        <Link href="https://linkedin.com/in/manuel-gatchalian" target="_blank">
          <IconBrandLinkedin
            className="cursor-pointer"
            title="LinkedIn"
            aria-label="LinkedIn"
          />
        </Link>
        <Link href="https://github.com/Yengzzkie" target="_blank">
          <IconBrandGithub
            className="cursor-pointer"
            title="GitHub"
            aria-label="GitHub"
          />
        </Link>
        <Link href="https://facebook.com/yengzzkie/" target="_blank">
          <IconBrandFacebook
            className="cursor-pointer"
            title="Facebook"
            aria-label="Facebook"
          />
        </Link>
        <Link href="https://codepen.io/yengzzkie" target="_blank">
          <IconBrandCodepen
            className="cursor-pointer"
            title="CodePen"
            aria-label="CodePen"
          />
        </Link>
      </div>
      <DefaultButton
        onDownload={downloadResume}
        cn="block bg-violet-500 px-3 py-2 ml-auto mr-4"
        text="My Resume"
      />
    </div>
  );
};

export default Header;
