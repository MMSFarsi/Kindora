import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../../LoadingSpinner';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    fetchUsers();
  }, [axiosPublic]);

  const fetchUsers = () => {
    axiosPublic.get('/users').then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users.");
        setLoading(false);
      });
  };

  const handleRemove = async (id) => {
    

    try {
      const res = await axiosPublic.delete(`/users/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("User removed successfully!");
        fetchUsers(); 
      } else {
        toast.error("Failed to remove user.");
      }
    } catch (error) {

      toast.error("An error occurred while removing the user.");
    }
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="p-0 lg:p-6 min-h-screen ">
      <h2 className="text-2xl text-center font-semibold mb-4">Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg">
          <thead className=" text-[10px] text-gray-700">
            <tr>
              <th className="py-2 lg:py-3 px-3 lg:px-4 text-left">#</th>
              <th className="py-2 lg:py-3 px-3 lg:px-4 text-left">Name</th>
              <th className="py-2 lg:py-3 px-3 lg:px-4 text-left">Email</th>
              <th className="py-2 lg:py-3 px-2 lg:px-4 text-left">Role</th>
              <th className="py-2 lg:py-3 px-2 lg:px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className='text-[10px] '>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-t "
              >
                <td className="py-2 px-2">{index + 1}</td>
                <td className="py-2 px-2">{user.name || "N/A"}</td>
                <td className="py-2 px-3">{user.email}</td>
                <td className="py-2 px-2 capitalize">{user.role || "User"}</td>
                <td className="py-2 px-2">
                  <button
                    onClick={() => handleRemove(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded text-[9px] lg:text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
