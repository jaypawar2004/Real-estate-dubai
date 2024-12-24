import React, { useState } from 'react';

const Login = () => {
  const [tab, setTab] = useState('signup');

  return (
    <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="mt-2">Your Admin Panel</p>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setTab('signup')}
                className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${
                  tab === 'signup' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setTab('login')}
                className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${
                  tab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Login
              </button>
            </div>

            {tab === 'signup' && (
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Full Name"
                  />
                  <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Email"
                  />
                  <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Password"
                  />
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Sign Up
                </button>
              </form>
            )}

            {tab === 'login' && (
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Email"
                  />
                  <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Password"
                  />
                  <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Login
                </button>
<a href="#">
<h2 className='text-blue-300 mt-5'>Forgot password ?</h2>
</a>
              </form>
            )}

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
