import { CentralContent } from "../molecules/centralContent";
import { Header } from "../molecules/header";
import { ThemeToogle } from "../molecules/themeToogle";
import { Particles } from "../atoms/particles";
import { LanguageToogle } from "../molecules/languageToogle";

export const Landing = () =>
    <section className="h-screen flex overflow-hidden">
      <Header>
        <ThemeToogle />
        <LanguageToogle/>
      </Header>
      <CentralContent />
      <Particles />
    </section>
