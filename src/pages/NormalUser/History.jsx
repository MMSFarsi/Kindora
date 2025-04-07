import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const History = () => {
  const { user } = useAuth(); // Get logged-in user
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://kindora-server.vercel.app/payment/${user.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`, 
        },
      })
        .then(res => res.json())
        .then(data => setTransactions(data))
        .catch(error => console.error('Error fetching transactions:', error));
    }
  }, [user]);

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl text-center font-semibold mb-4">Transaction History</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-600">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left">Amount ($)</th>
                <th className="py-3 px-4 text-left">Transaction ID</th>
                <th className="py-3 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction._id} className="border-b">
                  <td className="py-3 px-4 text-green-600 font-semibold">${transaction.price}</td>
                  <td className="py-3 px-4 text-blue-600">{transaction.transactionId}</td>
                  <td className="py-3 px-4">{new Date(transaction.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default History;
