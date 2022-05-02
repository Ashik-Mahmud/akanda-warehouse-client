import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const useCurrentUserBlogs = () => {
  const [currentUserBlogs, setCurrentUserBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:5000/user-blogs?uid=${auth?.currentUser?.uid}`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setCurrentUserBlogs(res.data.result);
          setLoading(true);
        });
    })();
  }, []);
  return { currentUserBlogs, loading };
};
