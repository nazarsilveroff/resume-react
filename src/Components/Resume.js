import React from "react";
import Sidebar from "./Bar/Sidebar";
import Header from "./Header/Header";
import Main from "./Main/Main";
import useWindowSize from "./ResizeHook/UseResize";
import cls from "classnames";
const Resume = () => {
  const { width } = useWindowSize();
  return (
    <div className="flex ">
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-100">
        {width < 767 && <Header />}
        <div className={cls(width < 767 ? "flex h-full" : "flex h-screen")}>
          {width >= 768 && <Sidebar />}
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Resume;
