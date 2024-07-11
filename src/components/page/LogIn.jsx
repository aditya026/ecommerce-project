import React from "react";

const LogIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#6b63ffff]">
      <div className="h-96 w-96">
        <img className="h-full w-full rounded-l-lg" src="/login.png" alt="" />
      </div>
      <div className="h-96 w-96 flex justify-center items-center bg-gray-100 rounded-r-lg">
        <div className="bg-white p-3 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center font-roboto">Login</h2>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 font-roboto"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-roboto"
                id="phone"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 font-roboto"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-roboto"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 font-roboto"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline font-roboto"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-roboto"
                type="button"
              >
                Login
              </button>
              <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 font-roboto">
                Register here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
