import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';

const MyDonation = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user?.email) {
      axiosPublic.get(`/payment/${user.email}`)
        .then(res => {
          setDonations(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching donations:', err);
          setLoading(false);
        });
    }
  }, [axiosPublic, user?.email]);

  return (
    <div className=" p-6">
      <h2 className="text-2xl text-center font-semibold mb-4">My Donations</h2>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : donations.length === 0 ? (
        <p className="text-gray-500">No donation history found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Event Name</th>
                <th className="border p-2">Amount</th>
                
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation._id} className="text-center">
                  <td className="border p-2">{donation.eventName || 'N/A'}</td>
                  <td className="border p-2">${donation.price}</td>
               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyDonation;
