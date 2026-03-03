import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <>
      <div className="bg-white flex flex-col w-[550px] gap-3 rounded-3xl  justify-center items-center min-h-[400px] p-5">
        <div className="text-black font-bold text-4xl mt-5">
          <h1>Sign up</h1>
        </div>
        <div>
          <p>
            Already have an account?{" "}
            <a href="#" className="text-blue-300 hover:underline">
              Log in
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 rounded-md border-1 text-black w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 rounded-md border-1 text-black w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md border-1 text-black w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-md border-1 text-black w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <p className="text-sm text-gray-600 w-[300px]">
            I agree to Aps's Terms & Condtions and acknowledge the Privacy Policy.  
          </p>
        </div>
        <div>
          <button className="bg-[#0CC8A8] text-white font-bold py-2 px-4 rounded-4xl hover:bg-gray-200 w-[400px] mb-5">
            Sign Up
          </button>
        </div>
        <div >
            <div className="flex gap-6 mb-5">
  <button className="h-10 w-24 flex items-center justify-center rounded-full bg-black text-white transition hover:scale-105">
    <FaApple className="text-lg" />
  </button>

  <button className="h-10 w-24 flex items-center justify-center rounded-full bg-white shadow border transition hover:scale-105">
    <FcGoogle className="text-lg" />
  </button>

  <button className="h-10 w-24 flex items-center justify-center rounded-full bg-blue-600 text-white transition hover:scale-105">
    <FaFacebook className="text-lg" />
  </button>
</div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
