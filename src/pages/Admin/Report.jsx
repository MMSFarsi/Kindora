import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../../LoadingSpinner';

const Report = () => {
  const [payments, setPayments] = useState([]);
  const [events, setEvents] = useState([]);
  
     const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get('/payments').then(res => {
      setPayments(res.data);
      setLoading(false);
    });
   
    axiosSecure.get('/events').then(res => {
      setEvents(res.data);
      setLoading(false);
    });
  }, [axiosSecure]);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const totalDonations = payments.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const totalDonors = payments.length;

  const eventNames = events.map(e => e.eventName.trim());

  const donationSummary = eventNames.map(eventName => {
    const filtered = payments.filter(p => (p.eventName || '').trim() === eventName);
    const total = filtered.reduce((sum, p) => sum + parseFloat(p.price), 0);
    return {
      eventName,
      donationCount: filtered.length,
      donationTotal: total
    };
  });

  const generalDonations = payments.filter(p => !p.eventName);
  const generalDonationTotal = generalDonations.reduce((sum, p) => sum + parseFloat(p.price), 0);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl text-center font-semibold mb-4">Report & Analytics</h2>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-lg">📦 Total Donations: <strong>${totalDonations.toFixed(2)}</strong></p>
        <p className="text-lg">🙋 Total Donors: <strong>{totalDonors}</strong></p>
      </div>

      <div>
        <h3 className="text-2xl mt-6 mb-2 font-semibold">Event-wise Summary</h3>
        <div className="space-y-4">
          {donationSummary.map((event, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <p><strong>🎯 Event:</strong> {event.eventName}</p>
              <p>💸 Total Donations: ${event.donationTotal.toFixed(2)}</p>
              <p>👥 Donors: {event.donationCount}</p>
            </div>
          ))}

          {generalDonations.length > 0 && (
            <div className="p-4 border rounded-lg bg-yellow-50">
              <p><strong>📌 General Donations (No Event)</strong></p>
              <p>💸 Total: ${generalDonationTotal.toFixed(2)}</p>
              <p>👥 Donors: {generalDonations.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Report;
