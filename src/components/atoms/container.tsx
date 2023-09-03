import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const Container = ({ children }: props) => {
  return (
    <div className=" max-w-[2500px] px-6 py-6 sm:px-14 xl:px-20 xl2:px-40 xl3:px-60 flex w-full">
      {children}
    </div>
  );
};
