import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileMouseEnter = (value = null) => {
    setIsDropdownOpen( value || !isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white font-bold hover:text-custom-blue">Dashboard</Link>
        <div className="space-x-4 flex items-center relative">
          {session?.user?.role === 'admin' && (
            <Link href="/admin" className="text-white hover:text-custom-blue">Admin Panel</Link>
          )}
          <div 
            onClick={()=>handleProfileMouseEnter(null)}
            className="relative"
          >
            <button className="text-white hover:text-custom-blue">Profile</button>
            <UserDropdown 
              user={session?.user}
              isOpen={isDropdownOpen}
              onClose={handleProfileMouseEnter}
            />
          </div>
          <button onClick={() => signOut({ callbackUrl: '/login' })} className="text-white hover:text-red-600">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


export const UserDropdown = ({ user, isOpen, onClose }) => {

  if (!isOpen) return null;

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-2 w-64 z-10 left-1/2 transform -translate-x-1/2">
      <div className="relative p-4 max-h-60 overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <h2 className="text-lg font-semibold">User Details</h2>
        <div className="flex flex-col">
          <p className="text-sm">
            <strong>Name:</strong> {user?.name}
          </p>
          <p className="text-sm">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-sm">
            <strong>Role:</strong> {user.role}
          </p>
            <button 
              onClick={handleLogout} 
              className="text-black mt-2 hover:text-red-600"
            >
              Logout
            </button>
        </div>
      </div>
    </div>
  );
};

