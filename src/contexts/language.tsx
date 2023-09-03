import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
interface props {
  children: ReactNode;
}
const Context = createContext({ isPT: true } as context);

export const LanguageContext = ({ children }: props) => {
  const [isPT, setIsPT] = useState(true);
  const onChange = () => {
    setIsPT(!isPT);
  };
  
  useEffect(() => {
    localStorage.setItem("isPT", `${isPT}`);
  }, [isPT]);

  useMemo(() => {
    const language = localStorage.getItem("isPT");
    if (language && language === "false") {
      setIsPT(false);
    }
  }, []);
  return (
    <Context.Provider value={{ isPT, onChange }}>
      {children}
    </Context.Provider>
  );
};
export const useLanguage = () => useContext(Context);
interface context {
  isPT: boolean;
  onChange(): void;
}
