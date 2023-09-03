import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { ContactBox } from "../molecules/contactBox";
import { Section } from "../molecules/section";
import { useLanguage } from "../../contexts/language";
import { contacts } from "./constants/contact.constants";

export const Contact = () => {
  const { isPT } = useLanguage();
  return (
    <Section>
      <div className="gap-4 w-full flex items-center flex-col">
        <EmojiText>🤙 {isPT ? "Contato" : "Contact"}</EmojiText>
        <Heading>{isPT ? "Onde me encontrar" : "Where to find me"}</Heading>
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
