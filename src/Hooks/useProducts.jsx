import axios from "axios";
import { useEffect, useState } from "react";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:5000/products`)
        .then((res) => {
          setLoading(true);
          setProducts(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);
  return { products, loading };
};

export default useProducts;
