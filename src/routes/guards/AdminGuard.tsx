import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "providers/AuthProvider";
import PageLoader from "components/loader/PageLoader";
import { paths } from "routes/paths";

interface AdminGuardProps {
  children?: React.ReactNode;
}

const AdminGuard = ({ children }: AdminGuardProps) => {
  const { user, profile, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <PageLoader />;
  }

  // Not logged in -> redirect to sign in
  if (!user) {
    return <Navigate to={paths.signIn} state={{ from: location }} replace />;
  }

  // Logged in but not admin -> redirect to home or dashboard
  if (!isAdmin && profile?.role !== "admin") {
    return <Navigate to={paths.home} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default AdminGuard;
