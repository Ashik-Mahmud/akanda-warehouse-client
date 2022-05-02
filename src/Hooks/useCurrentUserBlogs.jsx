import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const useCurrentUserBlogs = () => {
  const [currentUserBlogs, setCurrentUserBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://akanda-warehouse-server.herokuapp.com/user-blogs?uid=${auth?.currentUser?.uid}`,
          {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          setCurrentUserBlogs(res.data.result);
          setLoading(true);
        });
    })();
  }, []);
  return { currentUserBlogs, setCurrentUserBlogs, loading };
};
