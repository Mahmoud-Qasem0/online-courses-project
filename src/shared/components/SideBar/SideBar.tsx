import { FC, JSX } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideBar: FC = (): JSX.Element => {
  return (
    <>
      <Sidebar className="h-full">
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            Dashboard
          </MenuItem>
          <MenuItem component={<Link to="/calendar" />}> All Courses</MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}> Students</MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}> Resources</MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}>
            {" "}
            Discussions
          </MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}> Settings</MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}> Logout</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
