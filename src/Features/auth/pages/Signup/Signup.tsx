import React from "react";
import SignupForm from "../../components/SignupForm";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <div className="w-full max-w-[400px]">
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
        <div className="mt-4">
          <h2 className="mb-4 text-3xl text-center font-semibold text-gray-800">
            Sign Up
          </h2>
          <SignupForm />
        </div>
        <div className="my-2 text-center">
          Already have an account? <Link  to="/login" className="underline ms-1">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
