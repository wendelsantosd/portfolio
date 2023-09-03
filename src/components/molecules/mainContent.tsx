import { MainButton } from "../atoms/mainButton";
import { MainTitle } from "../atoms/mainTitle";
import { Paragraph } from "../atoms/paragraph";

export const MainContent = () => {
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
      <Paragraph>Desenvolvedor Full Stack Javascript</Paragraph>
      <Paragraph>Engenheiro de Software</Paragraph>
      <div className="toUp opacity-0">
        <MainButton onclick={scrollToAbout}>Sobre mim</MainButton>
      </div>
    </div>
  );
};
