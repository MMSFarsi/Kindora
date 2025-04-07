import React from 'react';
import useEvent from '../../Hooks/useEvent';
import { Link } from 'react-router-dom';

const AllEvents = () => {
    const [events] = useEvent();
    const getShortDescription = (text) => {
        return text.split(' ').slice(0, 10).join(' ') + (text.split(' ').length > 10 ? '...' : '');
    };

    return (
        <div className=" p-6">
            <h2 className="text-2xl font-bold text-center mb-6">All Fundraising Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events && events.length > 0 ? (
                    events.map((event) => (
                         <div key={event._id} className="border rounded-lg p-4 shadow-md">
                            <img
                                src={event.image}
                                alt={event.eventName}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold">{event.eventName}</h3>
                            <p className="text-gray-600">
                                {getShortDescription(event.description)}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Date: {new Date(event.dateTime).toLocaleDateString()}
                            </p>
                            <Link
                                to={`/event-details/${event._id}`}
                                className="inline-block mt-4 text-[12px] text-center bg-green-500  text-white px-4 py-2 rounded-md"
                            >
                                View Event Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No events available.</p>
                )}
            </div>
        </div>
    );
};

export default AllEvents;
