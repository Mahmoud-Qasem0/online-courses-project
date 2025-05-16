import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <>
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <Outlet />
    </div>
    </>
  );
};

export default AuthLayout;
