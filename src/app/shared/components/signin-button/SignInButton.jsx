import { Link } from "react-router-dom";

export const SignInButton = () => {
  return (
    <Link className="signInButton" to="/account/singin">
      Sign in
    </Link>
  );
};
