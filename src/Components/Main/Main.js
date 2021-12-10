import React from "react";
const Main = () => {
  return (
    <main className="flex flex-col w-full bg-gray-100 md:overflow-x-hidden md:overflow-y-auto font-sans text-gray-900 bg-gray-100">
      <div className="flex px-6 py-6">
        <div className="flex flex-col w-full h-full ">
          <div className="flex flex-col w-full max-w-6xl items-start justify-center mx-auto my-5">
            <p className="text-sm font-bold py-2">Front-End Developer</p>
            <h1 className="text-5xl font-bold py-4">Petulko Nazar</h1>
            <p>
              Personal qualities: commitment, ambition, communication, stress
              resistance. Interested in development in the IT field. Highly
              motivated. Confident PC user. Communicative - really easy to find
              a common language with colleagues and customers. I adequately
              perceive criticism, I often turn to feedback to develop faster. I
              am looking for a place where I can develop in many ways and
              realize my potential
            </p>
          </div>

          <div className="flex  flex-col w-full max-w-6xl  items-start justify-center mx-auto bg-gray-100 mb-3">
            <p className="text-2xl font-bold py-2">Projects</p>
            <ul className="flex flex-col text-sm font-medium text-base list-disc pl-5">
              <li>
                <a
                  target="_blank"
                  className="hover:text-red-500"
                  href="https://suspicious-bell-afd81b.netlify.app/"
                  rel="noreferrer"
                >
                  Resume
                </a>
                {" - "}
                <span>[React.js - HTML5 - Tailwind styles]</span>
              </li>
              <li>
                <a
                  target="_blank"
                  className="hover:text-red-500"
                  href="https://hydeem-reactivno.netlify.app/"
                  rel="noreferrer"
                >
                  Hydeem-reactivno.app
                </a>
                {" - "}
                <span>
                  [React.js - Redux.js - HTML5 - CSS Modules - Axios - React
                  router, Redux persist, Redux thunk.]
                </span>
              </li>
              <li>
                <a
                  target="_blank"
                  className="hover:text-red-500"
                  href="https://flamboyant-sammet-78c43a.netlify.app/"
                  rel="noreferrer"
                >
                  Phone-Book.app
                </a>
                {" - "}
                <span>
                  [React.js - Redux.js - HTML5 - Tailwind styles - Axios - React
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>

          <div className="flex  flex-col  w-full max-w-6xl  items-start justify-center mx-auto bg-gray-100 mb-3 ">
            <h2 className="text-2xl font-bold py-2">Work Experience</h2>
            <p>
              <span className="font-medium">Position:</span> Data Analyst
            </p>
            <p>
              <span className="font-medium">Company:</span> CreatorIQ
            </p>
            <p>
              <span className="font-medium">Duties:</span> Searched for
              info-lessers for advertising companies, adding date profiles in
              the platform.
            </p>
            <span className="text-sm font-thin mt-2">
              (06.05.2017) — (02.03.2020) | Ukraine
            </span>
          </div>

          <div className="flex  flex-col  w-full max-w-6xl  items-start justify-center mx-auto bg-gray-100 mb-3">
            <h2 className="text-2xl font-bold py-2">Languages</h2>
            <p>
              <span className="font-medium">Russian</span> — native speaker
            </p>
            <p>
              <span className="font-medium">Ukrainian</span> — native speaker
            </p>
            <p>
              <span className="font-medium">English</span> — intermediate
            </p>
          </div>

          <div className="flex  flex-col w-full max-w-6xl  items-start justify-center mx-auto bg-gray-100 mb-3">
            <h2 className="text-2xl font-bold py-2">Education</h2>
            <p className="text-lg font-medium py-1">
              NTU "KhPI" extramural student
            </p>
            <p>
              <span className="font-medium">Faculty:</span> «Computer science
              and software engineering»
            </p>
            <p>
              <span className="font-medium">Specialty:</span> «Computer science
              and IT education»
            </p>
            <span className="text-sm font-thin mt-2 mb-2">
              2016 - 2020 | Ukraine
            </span>
            <p className="text-lg font-medium py-1">
              VPU №7 full-time student.
            </p>
            <p>
              <span className="font-medium">Specialty:</span> «Computer Set
              Operator»
            </p>
            <p>
              <span className="font-medium">Education:</span> Secondary
              vocational.
            </p>
            <span className="text-sm font-thin mt-2  mb-2">
              2013 - 2016 | Ukraine
            </span>
            <p className="text-lg font-medium py-1">GOIT Courses</p>
            <p>
              <span className="font-medium">Specialty:</span> Frontend
              Full-Stack
            </p>
            <span className="text-sm font-thin mt-2">
              01.01.2021 - up to now. | Ukraine
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
