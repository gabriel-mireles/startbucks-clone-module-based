import { logoutFirebase } from "app/firebase/firebase";
import { registerWithEmailAndPassword } from "app/firebase/firebase";
import { logInWithEmailAndPassword } from "app/firebase/firebase";
import { logout } from "app/state/user/userSlice";
import { login } from "app/state/user/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const doLogin = async (username, password) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const userAuth = await logInWithEmailAndPassword(username, password);
      dispatch(
        login({
          name: userAuth.user.firstname + " " + userAuth.lastname,
          email: userAuth.user.email,
          uid: userAuth.user.uid,
        })
      );
      navigate("/menu");
    } catch (e) {
      setErrorMessage(
        "The email or password you entered is not valid. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const doSignUp = async ({ firstname, lastname, username, password }) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const userAuth = await registerWithEmailAndPassword(
        firstname,
        lastname,
        username,
        password
      );

      dispatch(
        login({
          email: userAuth.email,
          uid: userAuth.uid,
        })
      );

      navigate("/menu");
    } catch (e) {
      setErrorMessage(
        "The email or password you entered is not valid. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const doLogOut = () => {
    logoutFirebase();
    dispatch(logout())
  };

  return {
    isLoading,
    errorMessage,
    doSignUp,
    doLogin,
    doLogOut
  };
};
