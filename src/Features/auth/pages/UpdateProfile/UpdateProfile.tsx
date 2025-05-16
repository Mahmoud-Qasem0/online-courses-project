import React from "react";
import UpdateProfileForm from "../../components/UpdateProfileForm";
import { Link } from "react-router-dom";

const UpdateProfile: React.FC = () => {
  return (
    <div className="w-full max-w-[400px]">
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
        <div className="mt-4">
          <h2 className="mb-4 text-3xl text-center font-semibold text-gray-800">
            Update Profile
          </h2>
          <UpdateProfileForm />
        </div>
        <div className="my-2 text-center">
          <Link to="/dashboard" className="underline ms-1">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
