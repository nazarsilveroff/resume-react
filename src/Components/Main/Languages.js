import React from 'react';

function Languages(props) {
    return (
        <div
            className="flex  flex-col  w-full max-w-6xl  items-start justify-center mx-auto bg-gray-100 mb-3">
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
    );
}

export default Languages;