import React from 'react';

function Education(props) {
    return (
        <div
            className="flex  flex-col w-full max-w-6xl  items-start justify-center mx-auto bg-gray-100 mb-3">
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
    );
}

export default Education;