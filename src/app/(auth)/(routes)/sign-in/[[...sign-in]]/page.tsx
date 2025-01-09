import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <SignIn forceRedirectUrl={process.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL} />
  );
};

export default SignInPage;
