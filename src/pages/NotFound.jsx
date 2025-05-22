import React from 'react';
import { Link } from 'react-router-dom';
import notFoundBg from '../assets/Images/404 Error Page not Found with people connecting a plug-pana.png';

const NotFound = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen px-4 bg-gray-50">

            <div
                className="bg-cover bg-center  rounded-xl shadow-lg h-1/2 max-w-3xl w-full text-center"
                style={{ backgroundImage: `url(${notFoundBg})` }}>
            </div>

            <div>
                <Link to="/" className="mb-20 inline-block px-8 py-3 border rounded-lg hover:shadow-2xl transition font-semibold shadow"
                >Go Back Home</Link>
            </div>

        </div>
    );
};

export default NotFound;
