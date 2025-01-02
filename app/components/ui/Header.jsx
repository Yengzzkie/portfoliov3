import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandCodepen,
} from "@tabler/icons-react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="sticky top-0 flex items-center w-full px-4 py-6 bg-zinc-900/50 z-20 backdrop-blur-md">
      <div className="flex justify-between gap-4 w-fit ml-4">
        <IconBrandLinkedin
          className="cursor-pointer"
          title="LinkedIn"
          aria-label="LinkedIn"
        />
        <IconBrandGithub
          className="cursor-pointer"
          title="GitHub"
          aria-label="GitHub"
        />
        <IconBrandFacebook
          className="cursor-pointer"
          title="Facebook"
          aria-label="Facebook"
        />
        <IconBrandCodepen
          className="cursor-pointer"
          title="CodePen"
          aria-label="CodePen"
        />
      </div>
      <Button cn={"block bg-violet-500 px-3 py-2 ml-auto mr-4"} text={"My Resume"} />
    </div>
  );
};

export default Header;
