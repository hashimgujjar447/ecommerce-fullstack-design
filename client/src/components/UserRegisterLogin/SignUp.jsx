import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 sm:p-0 w-full bg-gray-100">
      <form className="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-gray-900 text-2xl sm:text-3xl mt-10 font-medium">
          Sign Up
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Please fill in the details to register
        </p>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="mt-6 w-full h-10 sm:h-12 rounded-full border border-gray-300/80 pl-6 text-sm placeholder-gray-500 text-gray-700 outline-none"
          required
        />

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="mt-4 w-full h-10 sm:h-12 rounded-full border border-gray-300/80 pl-6 text-sm placeholder-gray-500 text-gray-700 outline-none"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email ID"
          className="mt-4 w-full h-10 sm:h-12 rounded-full border border-gray-300/80 pl-6 text-sm placeholder-gray-500 text-gray-700 outline-none"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="mt-4 w-full h-10 sm:h-12 rounded-full border border-gray-300/80 pl-6 text-sm placeholder-gray-500 text-gray-700 outline-none"
          required
        />

        <button
          type="submit"
          className="mt-6 w-full h-9 sm:h-11 rounded-full text-white  bg-[#0D6EFD] hover:opacity-90 transition-opacity"
        >
          Register
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          Already have an account?{" "}
          <Link className="text-indigo-500" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
