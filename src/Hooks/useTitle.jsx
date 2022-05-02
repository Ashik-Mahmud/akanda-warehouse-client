import { useEffect, useState } from "react";

const useTitle = (titleText) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = title + " - akanda warehouse application ";
    setTitle(titleText);
  }, [titleText, title]);
  return { title, setTitle };
};

export default useTitle;
