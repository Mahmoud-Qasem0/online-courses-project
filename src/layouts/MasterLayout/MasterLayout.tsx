import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../shared/components/SideBar/SideBar";
import Navbar from "../../shared/components/NavBar/Navbar";
import CoursesCounter from "../../Features/dashboard/components/CoursesCounter/CoursesCounter";
const MasterLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <div className="flex">
        <div>
          <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        <div className="grow justify-around">
          <div className="grid grid-cols-5 mt-6 justify-around">
            <div className="md:hidden col-span-full">
              <Navbar />
            </div>
            <div className="md:col-span-3 col-span-full">
              <Outlet />
            </div>
            <div className="tasks md:col-span-2 col-span-full">
              <div className="md:block hidden">
                <Navbar />
              </div>
              <CoursesCounter />
              <p>sddfsa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
