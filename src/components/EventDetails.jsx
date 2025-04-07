import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useEvent from '../Hooks/useEvent';

const EventDetails = () => {
    const { id } = useParams();
    const [events] = useEvent();
    const event = events.find(event => event._id === id);
   

    if (!event) {
        return <div className="text-center text-gray-500">Event not found</div>;
    }

    return (
        <div className="max-w-4xl min-h-screen mx-auto p-6 ">
            <h2 className="text-2xl text-center font-bold mb-4">{event.eventName}</h2>
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-gray-700 mb-4">{event.description}</p>
            <p className="text-lg mb-5 font-semibold">Date: {new Date(event.dateTime).toLocaleDateString()}</p>
            <Link to={'/donate'} className="bg-green-500  text-white px-4 py-3 rounded hover:bg-green-600" > Donate
              </Link>
        </div>
    );
};

export default EventDetails;
