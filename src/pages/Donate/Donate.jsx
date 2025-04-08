import React, { useState } from 'react';
import useEvent from '../../Hooks/useEvent';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Donate = () => {
    const [events] = useEvent();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [donationAmount, setDonationAmount] = useState('');

    const handleDonateClick = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className="max-w-4xl min-h-screen mx-auto p-1 lg:p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Donate to Fundraising Events</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-3 lg:px-4 border">Event Name</th>
                        <th className="py-2 px-3 lg:px-4 border">Date</th>
                        <th className="py-2 px-3 lg:px-4 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events && events.length > 0 ? (
                        events.map((event) => (
                            <tr key={event.id} className="text-center">
                                <td className="py-2 px-3 lg:px-4 border">{event.eventName}</td>
                                <td className="py-2 px-3 lg:px-4 border">{new Date(event.dateTime).toLocaleDateString()}</td>
                                <td className="py-2 px-3 lg:px-4 border">
                                    <button
                                        onClick={() => handleDonateClick(event)}
                                        className="bg-green-500 text-white  px-3 lg:px-4 py-1 rounded hover:bg-green-600"
                                    >
                                        Donate
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="py-4 text-center text-gray-500">No events available.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {selectedEvent && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex justify-center items-center">

                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Donate to {selectedEvent.eventName}</h3>
                        <input
                            type="number"
                            placeholder="Enter donation amount"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            className="w-full border px-3 py-2 rounded mb-4"
                        />
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <Link
                                to={`/payment/${selectedEvent._id}?amount=${donationAmount}`}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Donate
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donate;
