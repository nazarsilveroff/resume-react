import React from "react";
import Sidebar from "./Bar/Sidebar";
import Main from "./Main/Main";
const Resume = () => {
  return (
    <div className="flex ">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Resume;
