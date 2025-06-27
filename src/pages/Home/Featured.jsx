import { Link } from 'react-router-dom';
import { MdDescription } from 'react-icons/md';
import { FaTag } from 'react-icons/fa';

const Featured = ({groups}) => {

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <h2 className=" text-4xl mt-20 font-extrabold text-center text-gray-800 mb-12">Featured Hobby Groups</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {groups.map(group => (
                    <div
                        key={group._id}
                        className="flex flex-col bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
                    >
                        <img
                            src={group.imageUrl}
                            alt={group.groupName}
                            className="w-full h-60 object-cover object-center rounded-t-2xl"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{group.groupName}</h3>

                            <p className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                                <FaTag /> <span className="font-semibold">Category:</span> {group.hobbyCategory}
                            </p>

                            <p className="flex items-start gap-2 text-sm text-gray-700 max-h-24 overflow-auto">
                                <MdDescription className="mt-1" />
                                <span>
                                    <span className="font-semibold">Description:</span> {group.description}
                                </span>
                            </p>

                            <Link to={`/groupDetails/${group._id}`} className="mt-auto">
                                <button className="w-full mt-5 bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded-xl shadow transition duration-300 ease-in-out">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;