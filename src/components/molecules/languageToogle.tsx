import { Switch } from "../atoms/switch";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useLanguage } from "../../contexts/language";
export const LanguageToogle = () => {
  const { isPT, onChange } = useLanguage();
  return (
    <Switch
      onChange={onChange}
      current={isPT}
      images={[<LiaFlagUsaSolid key={"sun"} />, <GiBrazilFlag key={"moon"} />]}
    />
  );
};
