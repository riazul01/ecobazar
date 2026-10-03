import { Navigate, Outlet } from "react-router";
import { useAuth } from "providers/AuthProvider";
import PageLoader from "components/loader/PageLoader";
import { accountPaths } from "routes/paths";

interface GuestGuardProps {
  children?: React.ReactNode;
}

const GuestGuard = ({ children }: GuestGuardProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (user) {
    return <Navigate to={accountPaths.dashboard} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default GuestGuard;
