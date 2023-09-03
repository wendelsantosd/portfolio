import { useLanguage } from "../../contexts/language";
import { MainButton } from "../atoms/mainButton";
import { MainTitle } from "../atoms/mainTitle";
import { Paragraph } from "../atoms/paragraph";
import { mainContentDataEN, mainContentDataPT } from "./constants/mainContent.constants";

export const MainContent = () => {
  const { isPT } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    const elementRect = element?.getBoundingClientRect();
    if (!elementRect) {
      return;
    }
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - window.innerHeight / 3;
    window.scrollTo(0, middle);
  };
  return (
    <div className=" flex flex-col items-center justify-center gap-3 z-30">
      <MainTitle>
        <i>
          <span className="text-primary dark:text-dprimary">Wendel</span>{" "}
          Santos
        </i>
      </MainTitle>
      <Paragraph>{isPT ?  mainContentDataPT.description_1 : mainContentDataEN.description_1}</Paragraph>
      <Paragraph>{isPT ? mainContentDataPT.description_2 : mainContentDataEN.description_2}</Paragraph>
      <div className="toUp opacity-0">
        <MainButton onclick={scrollToAbout}>{isPT ? mainContentDataPT.about : mainContentDataEN.about}</MainButton>
      </div>
    </div>
  );
};
