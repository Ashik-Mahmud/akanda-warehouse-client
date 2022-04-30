import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase/Firebase.config";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const socialSignIn = async (provider) => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { socialSignIn, loading };
};

export default useFirebase;
