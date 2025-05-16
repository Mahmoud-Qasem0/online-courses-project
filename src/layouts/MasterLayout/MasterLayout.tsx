import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../shared/components/SideBar/SideBar";

const MasterLayout: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div className="h-screen"><SideBar /></div>
        <div className="grow">
          fdgs
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
