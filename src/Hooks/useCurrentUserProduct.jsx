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
          `http://localhost:5000/currentUser-product?uid=${auth?.currentUser?.uid}`,
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
          console.log(err);
        });
    })();
  }, []);
  return { currentUserProduct, loading, setCurrentUserProduct };
};

export default useCurrentUserProduct;
