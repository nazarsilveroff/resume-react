import React from 'react';

function SoftSkils(props) {
    const skils = ['Scrum','Agile','Teamwork','Critical thinking','Flexibility','Ability to solve difficult problems']
    return (
        <ul className="flex flex-col text-base list-disc pl-5">
            {skils.map(skil=>
                <li key={skil}>
                    <span className="skills-text">{skil}</span>
                </li>
            )}
        </ul>
    );
}

export default SoftSkils;