import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { ContactBox } from "../molecules/contactBox";
import { Section } from "../molecules/section";
import mailIcon from "../../assets/mail.svg";
import lnIcon from "../../assets/ln.svg";
import gitIcon from "../../assets/git.svg";

export const Contact = () => {
  const contacts = [
    { img: mailIcon, title: "Email", content: "wendelwcsantos@gmail.com" },
    {
      img: lnIcon,
      title: "LinkedIn",
      content: "https://www.linkedin.com/in/engwendelsantos",
    },
    {
      img: gitIcon,
      title: "GitHub",
      content: "https://github.com/wendelsantosd",
    },
  ];
  return (
    <Section>
      <div className="gap-4 w-full flex items-center flex-col">
        <EmojiText>🤙 Contato</EmojiText>
        <Heading>Onde me encontrar</Heading>
        <div className="mt-10 flex flex-wrap w-full  gap-y-8 gap-4 justify-center lg:gap-16 xl2:gap-28 ">
          {contacts.map((c, n: number) => (
            <ContactBox
              key={n}
              title={c.title}
              content={c.content}
              img={c.img}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
