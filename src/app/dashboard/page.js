"use client";
import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';
import { fetchUsersdData } from '@/services/user';
import { useEffect, useState } from 'react';
import UserTable from '@/components/UserData';
const Dashboard = () => {
  const { data: session } = useSession();
  const [getUserdata, setUserdata] = useState([]);

  useEffect(()=> {
      if(session?.user?.role === 'admin') {
        fetchUserDetails();
      }
  },[]);

  const fetchUserDetails = async() => {
    try {
   const userdata =  await fetchUsersdData();
   console.log(userdata, "uuuuuuuuuuuuuuuuuuuu");
   setUserdata(userdata.data);
    }
    catch (er) {}
  }

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
    {session?.user?.role === 'admin' ? 
    <UserTable users={getUserdata}/> : null }
    </div>
  );
};


export default Dashboard;
