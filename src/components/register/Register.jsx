"use client"; 
import axios from 'axios';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const Register = () => {


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(false)
  const locale = useLocale();
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(true)
    try{ 
        const res = await axios.post("/api/auth/register",{ username, email, password })
       res.data && router.push(`/${locale}/login`)
    }catch(err){
        console.log(err);
        setError(true)
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              required
              
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
          {error && <span className='text-red-600 font-normal'>Something went wrong!</span>}
        </form>
        <div className="text-center">
          <span className="text-gray-600">Already have an account?</span>
          <span className="text-blue-500 ml-2 hover:underline cursor-pointer">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
