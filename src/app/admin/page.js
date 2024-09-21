"use client";
import { useSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default async function AdminPanel() {
  const {data : session, status} =  useSession();
  const router = useRouter();

  // Redirect if the user is not authenticated or not an admin
  if (!session || session.user.role !== 'admin') {
    router.push('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-4">Admin Panel</h1>
        <Link href="/dashboard">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
