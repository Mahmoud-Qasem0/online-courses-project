import { FC, JSX } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../../Features/auth/api/authAPI";
import { toast } from "react-toastify";
import Logo from "../Logo/Logo";
import { MdDashboard, MdOutlineInsertDriveFile } from "react-icons/md";
import { PiGraduationCapLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import {
  TbLayoutSidebarLeftCollapse,
  TbLogout,
  TbMessage2,
} from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import "./sidebar.css";

interface IProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const sidebarItems = [
  {
    title: "Dashboard",
    component: <NavLink to="/dashboard/home" />,
    icon: <MdDashboard size={30} />,
  },
  {
    title: "All Courses",
    component: <NavLink to="/dashboard/all-courses" />,
    icon: <PiGraduationCapLight size={30} />,
  },
  {
    title: "Students",
    component: <NavLink to="/dashboard/students" />,
    icon: <CiUser size={30} />,
  },
  {
    title: "Resources",
    component: <NavLink to="/dashboard/resources" />,
    icon: <MdOutlineInsertDriveFile size={30} />,
  },
  {
    title: "Discussions",
    component: <NavLink to="/dashboard/discussions" />,
    icon: <TbMessage2 size={30} />,
  },
  {
    title: "Settings",
    component: <NavLink to="/update-profile" />,
    icon: <IoSettingsOutline size={30} />,
  },
];

const SideBar: FC<IProps> = ({ collapsed, setCollapsed }): JSX.Element => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login", { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Faild to log out");
      }
    }
  };
  return (
    <>
      <Sidebar
        className={`h-full bg-white text-white p-4 border-none border-r-0 outline-none`}
        collapsed={collapsed}>
        <button
          className="hidden md:block mx-auto mt-6"
          onClick={() => setCollapsed(!collapsed)}>
          <TbLayoutSidebarLeftCollapse size={30} />
        </button>
        <div className="flex justify-center items-center my-14">
          <Logo collapsedStatus={collapsed} />
        </div>
        <Menu
          className="mt-20"
          closeOnClick={true}
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                color: "#14A1DB",
              },
              [`&:hover`]: {
                color: "#14A1DB",
              },
              "@media (max-width: 768px)": {
                padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
            icon: {
              "@media (max-width: 768px)": {
                margin: 0,
              },
            },
            label: {
              "@media (max-width: 768px)": {
                display: "none",
              },
            },
          }}>
          {sidebarItems.map((item, i) => (
            <MenuItem key={i} component={item.component} icon={item.icon} title={item.title}>
              <span className="hidden md:inline-block ">{item.title}</span>
            </MenuItem>
          ))}
          <MenuItem onClick={handleLogOut} icon={<TbLogout size={30} />} title="Log Out">
            <span className={`hidden md:inline-block`}>Log Out</span>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
