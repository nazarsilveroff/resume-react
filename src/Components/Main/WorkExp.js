import React from 'react';

function WorkExp(props) {
    return (
        <div className="flex  flex-col  w-full max-w-6xl  items-start justify-center mx-auto bg-gray-100 mb-3 ">
            <h2 className="text-2xl font-bold py-2">Work Experience</h2>
            <ul className='work-container flex  flex-col'>
                <li className='work mb-5'>
                    <p>
                        <span className="font-medium">Position:</span> JavaScript Engineer
                    </p>
                    <p>
                        <span className="font-medium">Company:</span> GlobalLogic
                    </p>
                    <ul className='projects-list'>
                        <li className='project pt-1 mb-2'>
                            <p>
                                <span className="font-medium">Project:</span> Brightdata
                            </p>
                            <p>
                                <span className="font-medium">Key Responsibilities:</span> creating
                                functionality for parsing sites
                            </p>
                            <p>
                                <span className="font-medium">Technologies stack:</span> JS and JQuery
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="font-medium">Project:</span> HSF
                            </p>
                            <p>
                                <span className="font-medium">Key Responsibilities:</span> writing autotests
                                to test user interface and web service,
                                and took a part in writing a special framework for testing this web service.
                            </p>
                            <p>
                                <span className="font-medium">Technologies stack:</span> Cypress and JS
                            </p>
                        </li>
                    </ul>
                    <span className="text-sm font-thin mt-2">
                                    (21.07.2021) — (10.02.2022) | Ukraine
                                </span>
                </li>
                <li className='work'>
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
                </li>
            </ul>
        </div>
    );
}

export default WorkExp;