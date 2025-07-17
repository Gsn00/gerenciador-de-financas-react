import React from "react";

export const Icon = ({ children, className = "" }) => {
  return React.cloneElement(children, {
    className: `w-5 h-5 sm:w-6 sm:h-6 ${className}`,
  });
};
