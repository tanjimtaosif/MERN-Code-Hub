import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-purple-500" : `${className} font-semibold, text-blue-500`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;