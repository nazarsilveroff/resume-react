import React from 'react';

function TechSkils(props) {
    const skills = ['HTML5', 'CSS3', 'jQuery', 'GIT', 'WebPack', 'JavaScript',
        'React.js', 'React router', 'Redux', 'REST API', 'NPM', 'Cypress', 'Node.js', 'Tailwind']
    return (
        <ul className="flex flex-col text-base list-disc pl-5">
            {skills.map(skill =>
                <li key={skill}>
                    <span className="skills-text">{skill}</span>
                </li>
            )}

        </ul>
    );
}

export default TechSkils;