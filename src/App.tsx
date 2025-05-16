import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import Login from "./Features/auth/pages/Login/Login";
import Signup from "./Features/auth/pages/Signup/Signup";
import ForgetPassword from "./Features/auth/pages/ForgetPassword/ForgetPassword";
import UpdateProfile from "./Features/auth/pages/UpdateProfile/UpdateProfile";
// import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { observeUser } from "./Features/auth/api/authAPI";
import { setUser } from "./Features/auth/api/authSlice";
import { ToastContainer } from "react-toastify";
import ProtectRoute from "./Features/auth/components/ProtectRoute";

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
  // {
  //   path: "dashboard",
  //   element: (
  //     <ProtectRoute>
  //       <MasterLayout />
  //     </ProtectRoute>
  //   ),
  //   errorElement: "not found",
  //   children: [
  //     {index: true, element: ""},
  //     {path: "", element: ""},
  //     {path: "", element: ""},
  //     {path: "", element: ""},
  //     {path: "", element: ""},
  //   ],
  // },
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
