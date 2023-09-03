import { FooterIcon } from "../atoms/footerIcons";
import { Paragraph } from "../atoms/paragraph";
import gitIcon from "../../assets/git.svg"
import lnIcon from "../../assets/ln.svg"

export const Footer = () => {
  const socials = [
    { link: "https://github.com/wendelsantosd", img: gitIcon },
    { link: "https://www.linkedin.com/in/engwendelsantos/", img: lnIcon },
  ];
  return (
    <footer className="w-full bg-card flex flex-col gap-6 pt-4 dark:bg-dcard relative">
      <div className="w-full justify-center flex gap-3">
        {socials.map((s, n: number) => (
          <FooterIcon key={n} link={s.link} image={s.img} />
        ))}
      </div>
      <div className="text-center w-full">
        <Paragraph>&copy; 2023 Wendel Santos. all rights reserved.</Paragraph>
      </div>
    </footer>
  );
};
