import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import Login from "./Features/auth/pages/Login/Login";
import Signup from "./Features/auth/pages/Signup/Signup";
import ForgetPassword from "./Features/auth/pages/ForgetPassword/ForgetPassword";
import UpdateProfile from "./Features/auth/pages/UpdateProfile/UpdateProfile";
import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { observeUser } from "./Features/auth/api/authAPI";
import { setUser } from "./Features/auth/api/authSlice";
import { ToastContainer } from "react-toastify";
import ProtectRoute from "./Features/auth/components/ProtectRoute";
import Home from "./Features/dashboard/pages/Home/Home";
import AllCourses from "./Features/dashboard/pages/AllCourses/AllCourses";
import Discussions from "./Features/dashboard/pages/Discussions/Discussions";
import Students from "./Features/dashboard/pages/Students/Students";
import Resources from "./Features/dashboard/pages/Resources/Resources";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: "not found",
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <Signup /> },
      { path: "forget-pass", element: <ForgetPassword /> },
      {
        path: "update-profile",
        element: (
          <ProtectRoute>
            <UpdateProfile />
          </ProtectRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectRoute>
        <MasterLayout />
      </ProtectRoute>
    ),
    errorElement: "not found",
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "all-courses", element: <AllCourses /> },
      { path: "discussions", element: <Discussions /> },
      { path: "students", element: <Students /> },
      { path: "resources", element: <Resources /> },
    ],
  },
]);

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = observeUser((user) => {
      dispatch(setUser(user));
    });

    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
