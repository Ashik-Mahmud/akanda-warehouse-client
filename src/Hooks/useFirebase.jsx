import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../Firebase/Firebase.config";
import Token from "../Helpers/Token";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const socialSignIn = async (provider) => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res);
        toast.success("Sign In successfully done.");
        Token(auth?.currentUser?.uid);
        setLoading(true);
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1]);
      });
  };

  /* get auth  */
  useEffect(() => {
    (async () => {
      await onAuthStateChanged(auth, (user) => {
        setUser(user);
        user?.uid ? setIsAuth(true) : setIsAuth(false);
      });
    })();
  }, []);

  return { socialSignIn, isAuth, user, loading };
};

export default useFirebase;
