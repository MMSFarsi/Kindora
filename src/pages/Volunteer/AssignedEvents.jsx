import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../../LoadingSpinner";

const AssignedEvents = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure(); 
  const [assignedEvents, setAssignedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/events/${user.email}`)
        .then((res) => {
          setAssignedEvents(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching assigned events:", err);
          setLoading(false);
        });
    }
  }, [user?.email, axiosSecure]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">My Assigned Events</h2>

      {assignedEvents.length === 0 ? (
        <p className="text-gray-500">You are not assigned to any events yet.</p>
      ) : (
        <ul className="space-y-4">
          {assignedEvents.map((event) => (
            <li
              key={event._id}
              className="bg-white shadow rounded-lg p-4 border-l-4 border-green-500"
            >
              <h3 className="text-xl font-bold text-green-600">{event.eventName}</h3>
              <p className="text-sm text-gray-600 mb-1">
                📅 Date & Time: {event.dateTime}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AssignedEvents;
