import axios from "axios";
import { useEffect, useState } from "react";
const useProducts = (limit, page) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:5000/products?limit=${limit}&&page=${page}`)
        .then((res) => {
          setLoading(true);
          setProducts(res.data.result);
          setTotalItems(res.data.count);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [limit, page]);
  return { products, loading, setProducts, totalItems };
};

export default useProducts;
