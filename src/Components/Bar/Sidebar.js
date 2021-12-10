import React from "react";
const Sidebar = () => {
  return (
    <nav className="flex w-100 h-full overflow-x-hidden overflow-y-auto bg-gray-800">
      <div className="w-full flex flex-col  h-screen text-gray-100">
        <img
          className="rounded-full mx-auto mb-1"
          src="https://avatars.githubusercontent.com/u/45458680?v=4"
          alt="Nazar Petulko"
        />
        <div className=" pl-10 py-2">
          <div className="flex flex-col mb-3">
            <h3 className="title text-2xl font-bold text-2xl font-bold">
              Contacts
            </h3>
            <div>
              <a
                className="contacts-link phone flex  hover:text-red-500"
                href="tel:+38 096 621 0685"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +38 096 621 0685
              </a>
            </div>
            <div>
              <a
                className="contacts-link mail flex hover:text-red-500"
                href="mailto:nazar91187@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                nazar91187@gmail.com
              </a>
            </div>
          </div>

          <div className="tech-skills-container mb-2">
            <h3 className="title text-2xl font-bold">Tech Skills</h3>
            <ul className="flex flex-col text-xs list-disc pl-5">
              <li>
                <span className="skills-text">HTML5</span>
              </li>
              <li>
                <span className="skills-text">CSS3</span>
              </li>
              <li>
                <span className="skills-text">GIT</span>
              </li>
              <li>
                <span className="skills-text">WebPack</span>
              </li>
              <li>
                <span className="skills-text">JavaScript</span>
              </li>
              <li>
                <span className="skills-text">React.js</span>
              </li>
              <li>
                <span className="skills-text">React router</span>
              </li>
              <li>
                <span className="skills-text">Redux persist</span>
              </li>
              <li>
                <span className="skills-text">REST API</span>
              </li>
              <li>
                <span className="skills-text">NPM</span>
              </li>
            </ul>
          </div>

          <div className="soft-skills-container mb-2">
            <h3 className="title text-2xl font-bold">Soft Skills</h3>
            <ul className="flex flex-col text-xs list-disc pl-5">
              <li>
                <span className="skills-text">Scrum</span>
              </li>
              <li>
                <span className="skills-text">Agile</span>
              </li>
              <li>
                <span className="skills-text">GTD</span>
              </li>
              <li>
                <span className="skills-text">Teamwork</span>
              </li>
            </ul>
          </div>

          <div className=" flex flex-col justify-center">
            <h3 className="title  font-bold mb-1">Subscribe</h3>
            <ul className="icon-list flex w-1/2 justify-between">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/nazar_silver_off"
                  rel="noreferrer"
                >
                  <svg
                    className="h-7 w-7 text-white hover:text-red-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/nazarsilveroff"
                  rel="noreferrer"
                >
                  <svg
                    className="h-7 w-7 text-white hover:text-red-500"
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
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B7%D0%B0%D1%80-%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8C%D0%BA%D0%BE/"
                  rel="noreferrer"
                >
                  <svg
                    className="h-7 w-7 text-white hover:text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
