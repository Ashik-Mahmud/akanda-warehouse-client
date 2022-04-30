import axios from "axios";
import { useEffect, useState } from "react";
const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://akanda-warehouse-server.herokuapp.com/reviews`
      );
      if (data) {
        setReviews(data);
        setLoading(true);
      }
    })();
  }, []);
  return [reviews, loading];
};

export default useReviews;
