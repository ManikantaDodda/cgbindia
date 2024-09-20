import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
      <p className="mb-8 text-center text-lg">
        Explore the best services and connect with top professionals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Image 
        src="https://picsum.photos/101/101" 
        alt="Random Image 1" 
        width={101} 
        height={101} 
        className="rounded shadow-md" 
      />
      <Image 
        src="https://picsum.photos/103/103" 
        alt="Random Image 2" 
        width={103} 
        height={103} 
        className="rounded shadow-md" 
      />
      <Image 
        src="https://picsum.photos/104/104" 
        alt="Random Image 3" 
        width={104} 
        height={104} 
        className="rounded shadow-md" 
      />
    </div>

      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-custom-blue text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
