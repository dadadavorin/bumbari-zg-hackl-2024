import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function LoginPage() {
  return (
    <>
      <AuthRedirect to="/all-shows" condition="loggedIn" />
      {/* <LoginForm /> */}
    </>
  );
}
