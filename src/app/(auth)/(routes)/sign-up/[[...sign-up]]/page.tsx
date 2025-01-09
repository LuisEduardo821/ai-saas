import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <SignUp forceRedirectUrl={process.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL} />
  );
};

export default SignUpPage;
