"use client";
import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';
import { fetchUsersdData } from '@/services/user';
import { useEffect, useState } from 'react';
import UserTable from '@/components/UserData';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [getUserdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role === 'admin') {
      fetchUserDetails();
    }
  }, [session, status]); // Run when session or status changes

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const userdata = await fetchUsersdData();
      console.log(userdata, "Fetched User Data");
      setUserdata(userdata.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold">Welcome {session?.user?.name}</h1>

        {session?.user?.role === 'admin' && (
          <div className="mt-4 bg-white p-4 rounded shadow">
            <h2 className="text-xl">Admin Section</h2>
            <p>Only accessible by admin users.</p>
          </div>
        )}

        {session?.user?.role === 'user' && (
          <div className="mt-4 bg-white p-4 rounded shadow">
            <h2 className="text-xl">User Section</h2>
            <p>Accessible by regular users.</p>
          </div>
        )}
      </div>

      {session?.user?.role === 'admin' && (
        <UserTable users={getUserdata} isLoading={loading} />
      )}
    </div>
  );
};

export default Dashboard;
