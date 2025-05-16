import React, { ReactNode } from "react";
import { useAppSelector } from "../../../store/hooks";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../../shared/components/Loading/Loading";

interface Props {
  children: ReactNode;
}

const ProtectRoute: React.FC<Props> = ({ children }) => {
  const { user, loading } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};

export default ProtectRoute;
