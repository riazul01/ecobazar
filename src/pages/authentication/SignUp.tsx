import type { BreadcrumbItem } from "components/common/BreadCrumb";
import SignUpForm from "components/sections/authentication/SignUpForm";
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
    title: "Signup",
    active: true,
  },
];

const SignUp = () => {
  return (
    <AuthLayout breadcrumbs={breadcrumbs}>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
