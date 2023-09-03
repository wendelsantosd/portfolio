import React from "react";
import ReactDOM from "react-dom/client";
import { Index } from ".";
import { DataContext } from "./contexts/data";
import { LanguageContext } from "./contexts/language";
import { ThemeContext } from "./contexts/theme";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <DataContext>
    <LanguageContext>
      <ThemeContext>
        <Index />
      </ThemeContext>
    </LanguageContext>
  // </DataContext>
);
