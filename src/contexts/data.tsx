import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { api } from "../api/api";
import { ISkill } from "../types/skill";
import { IProject } from "../types/project";
import { IAbout } from "../types/about";
import { Social } from "../types/social";
import { IInfo } from "../types/info";
import { ITimeLine } from "../types/timeLine";
import { ISection } from "../types/section";
import { IContact } from "../types/contact";
interface props {
  children: ReactNode;
}
const Context = createContext<Context>({} as Context);

export const DataContext = ({ children }: props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null as unknown as Data);
  const fechData = async () => {
    const response = await api.get(import.meta.env.VITE_API_URL, null);
    setLoading(false);
    if (response.statusCode !== 200) {
      return setError(true);
    }
    if (response.statusCode === 200) {
      return setData(response.data);
    }
  };
  useMemo(() => {
    fechData();
  }, []);
  return (
    <Context.Provider value={{ loading, error, data }}>
      {children}
    </Context.Provider>
  );
};
export const useData = () => useContext(Context);
interface Context {
  error: boolean;
  loading: boolean;
  data: Data;
}
interface Data {
  skills: ISkill[];
  projects: IProject[];
  about: IAbout;
  socials: Social[];
  info: IInfo;
  timeLine: ITimeLine[];
  sections: ISection;
  contacts: IContact[];
}
