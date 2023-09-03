import { useEffect, useState } from "react";
import { Home } from "./pages/home";
import { Loading } from "./pages/loading";

export const Index = () => {
  const [page, setPage] = useState(false)

  const loading = () => setInterval(() => {
    setPage(true)
  }, 1000)

  useEffect(() => {
    loading()
  }, [])

  return (
    <div className="bg-background dark:bg-dbackground font-main max-w-screen min-h-screen box-border overflow-x-hidden flex justify-center">
      <div className="w-full overflow-x-hidden">
        {page ? <Home /> : <Loading />}
      </div>
    </div>
  );
};
