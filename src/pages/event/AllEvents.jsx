import React from 'react';
import useEvent from '../../Hooks/useEvent';

const AllEvents = () => {
    const [events] = useEvent();

    return (
        <div className=" p-6">
            <h2 className="text-2xl font-bold text-center mb-6">All Fundraising Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <div key={event.id} className="border rounded-lg p-4 shadow-md">
                            <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold">{event.eventName}</h3>
                            <p className="text-gray-600">{event.description}</p>
                            <p className="text-sm text-gray-500 mt-2">Date: {event.dateTime}</p>
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
