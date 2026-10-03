import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "providers/AuthProvider";
import PageLoader from "components/loader/PageLoader";
import { paths } from "routes/paths";

interface AuthGuardProps {
  children?: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <PageLoader />;
  }

  if (!user) {
    return <Navigate to={paths.signIn} state={{ from: location }} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default AuthGuard;
