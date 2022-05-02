import React from "react";
import useTitle from "../../Hooks/useTitle";

const NotFound = () => {
  useTitle("Not found page");
  return (
    <div className="text-center py-20 grid place-items-center bg-[#FAFAFA]">
      <img
        src="https://inspirationfeed.com/wp-content/uploads/2019/05/404-error-page-e1557297434413.jpg"
        alt="not found page"
      />
    </div>
  );
};

export default NotFound;
