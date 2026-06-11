import type { BreadcrumbItem } from "components/common/BreadCrumb";
import SignInForm from "components/sections/authentication/SignInForm";
import AuthLayout from "layouts/auth-layout";

const breadcrumbs: BreadcrumbItem[] = [
  {
    id: 1,
    icon: "mdi-light:home",
    link: "/",
  },
  {
    id: 2,
    title: "Account",
    link: "/account",
  },
  {
    id: 3,
    title: "Signin",
    active: true,
  },
];

const SignIn = () => {
  return (
    <AuthLayout breadcrumbs={breadcrumbs}>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
