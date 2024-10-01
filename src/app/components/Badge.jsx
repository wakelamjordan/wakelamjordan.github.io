import React from "react";

const Badge = ({ children }) => {
  return (
    <div className={`badge badge-warning gap-2`}>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-4 w-4 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg> */}
      {children}
    </div>
  );
};

export default Badge;
