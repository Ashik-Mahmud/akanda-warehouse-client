import axios from "axios";
import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await axios.get(`http://localhost:5000/all-blogs`).then((res) => {
        setLoading(true);
        setBlogs(res.data.result);
      });
    })();
  }, []);
  return { blogs, loading };
};

export default useBlogs;
