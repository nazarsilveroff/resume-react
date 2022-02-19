import React from "react";
import Summary from "./Summary";
import WorkExp from "./WorkExp";
import ProjectExp from "./ProjectExp";
import Languages from "./Languages";
import Education from "./Education";
const Main = () => {
    return (
        <main
            className="flex flex-col w-full bg-gray-100 md:overflow-x-hidden md:overflow-y-auto font-sans text-gray-900 bg-gray-100">
            <div className="flex px-6 py-6">
                <div className="flex flex-col w-full h-full ">
                    <Summary/>
                    <WorkExp/>
                    <ProjectExp/>
                    <Languages/>
                    <Education/>
                </div>
            </div>
        </main>
    );
};

export default Main;
