import React from 'react';
import {AiOutlineLink} from "react-icons/ai";
import {HiExternalLink} from "react-icons/hi";

function ProjectExp(props) {
    return (
        <div
            className="flex  flex-col w-full max-w-6xl  items-start justify-center mx-auto bg-gray-100 mb-3">
            <p className="text-2xl font-bold py-2">Pet-Projects</p>
            <p className="font-medium font-bold flex items-center">Links <AiOutlineLink className="font-medium ml-1"/>
            </p>
            <ul className="flex flex-col text-sm font-medium text-base ">
                <li className='flex items-center'>
                    <a
                        target="_blank"
                        className="hover:text-red-500 flex items-center"
                        href="https://weather-education-app.netlify.app/"
                        rel="noreferrer"
                    >
                        <HiExternalLink className="text-2xl mr-1"/>Weather.app
                    </a>
                    {" - "}
                    <span>
                                  [React.js - Redux.js  - Styled-components - Axios - Weather API]
                                </span>
                </li>
                <li className='flex items-center'>
                    <a
                        target="_blank"
                        className="hover:text-red-500 flex items-center"
                        href="https://salon-beauty.netlify.app/"
                        rel="noreferrer"
                    >
                        <HiExternalLink className="text-2xl mr-1"/>BeautyPro
                    </a>
                    {" - "}
                    <span>
                                  [React.js - Redux.js - Styled-components - Axios - React
                                  router]
                                </span>
                </li>
                <li className='flex items-center'>
                    <a
                        target="_blank"
                        className="hover:text-red-500 flex items-center"
                        href="https://hydeem-reactivno.netlify.app/"
                        rel="noreferrer"
                    >
                        <HiExternalLink className="text-2xl mr-1"/>Hydeem-reactivno.app
                    </a>
                    {" - "}
                    <span>
                                  [React.js - Redux.js - CSS Modules - Axios - React
                                  router, Redux persist, Redux thunk.]
                                </span>
                </li>
                <li className='flex items-center'>
                    <a
                        target="_blank"
                        className="hover:text-red-500 flex items-center"
                        href="https://flamboyant-sammet-78c43a.netlify.app/"
                        rel="noreferrer"
                    >
                        <HiExternalLink className="text-2xl mr-1"/>Phone-Book.app
                    </a>
                    {" - "}
                    <span>
                                  [React.js - Redux.js - Tailwind styles - Axios - React
                                  router, Redux persist, Redux thunk.]
                                </span>
                </li>
            </ul>
            <a
                target="_blank"
                className="flex items-center justify-center mt-2 text-sm font-medium text-base hover:text-red-500"
                href="https://github.com/nazarsilveroff?tab=repositories"
                rel="noreferrer"
            >
                link to other projects in my GitHub
                <svg
                    className="h-7 w-7 ml-3 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
            </a>
        </div>
    );
}

export default ProjectExp;