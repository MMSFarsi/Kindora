import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import LoadingSpinner from '../../../LoadingSpinner';

const ManageEvent = () => {
  const [events, setEvents] = useState([]);
  const axiosPublic = useAxiosPublic();
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic.get('/events') .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
        toast.error('Failed to fetch events');
        console.error(err);
      });
  }, [axiosPublic]);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleDelete = async (id) => {
 

    try {
      const res = await axiosPublic.delete(`/events/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success('Event deleted');
        setEvents(prev => prev.filter(event => event._id !== id));
      }
    } catch (error) {
      toast.error('Failed to delete event');
    }
  };

  return (
    <div className="p-0 lg:p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl text-center font-semibold mb-4">Manage Events</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full  shadow-md rounded-xl">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event._id} className="border-b">
                <td className="p-4">
                  <img src={event.image} alt={event.name} className="lg:w-16 w-12 h-12 lg:h-16 object-cover rounded" />
                </td>
                <td className="p-4 text-xs lf:text-base font-medium">{event.eventName}</td>
                <td className="p-4 space-x-2">
                  <Link to={`/dashboard/edit-event/${event._id}`}>
                    <button className="px-2 lg:px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="px-2 lg:px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">No events found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEvent;
