import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
const useCurrentUserProduct = () => {
  const [currentUserProduct, setCurrentUserProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://akanda-warehouse-server.herokuapp.com/currentUser-product?uid=${auth?.currentUser?.uid}`,
          {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          setLoading(true);
          setCurrentUserProduct(res.data.result);
        })
        .catch((err) => {
          /* 
          if (err.response.status === 403) {
            signOut(auth).then(() => {
              toast.success("Sign Out successfully done.");
              toast.error(`Forbidden Access & Request.`);
              sessionStorage.clear();
            });
          } else if (err.response.status === 401) {
            signOut(auth).then(() => {
              toast.success("Sign Out successfully done.");
              toast.error("Unauthorized Users");
              sessionStorage.clear();
            });
          } */
        });
    })();
  }, []);
  return { currentUserProduct, loading, setCurrentUserProduct };
};

export default useCurrentUserProduct;
