import React from "react";
import useEvent from "../../Hooks/useEvent";

const AvailableEvents = () => {
  const [events] = useEvent();
  

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl text-center font-semibold mb-4">Available Events</h2>

      {events.length === 0 ? (
        <p className="text-gray-500">No events available at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event._id}
              className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-bold text-blue-600">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                📅 Date: {event.dateTime} |  Volunteer-Email: {event.AdminName}
              </p>
              <p className="text-gray-700">{event.description}</p>
    
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailableEvents;
