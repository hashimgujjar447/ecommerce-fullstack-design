import React from "react";

const ButtonComponent = ({ children, type, className = "" }) => {
  return (
    <button className={`${className}`} type={type}>
      {children}
    </button>
  );
};

export default ButtonComponent;
