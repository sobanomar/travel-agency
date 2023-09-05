import React from "react";

const ButtonGeneric = ({ disabled, label, children }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={
        disabled
          ? "text-gray-100 bg-purple-400 py-2 px-10 mb-5 rounded w-full"
          : "text-white bg-purple-600 py-2 px-10 mb-5 rounded w-full"
      }
    >
      {children}
    </button>
  );
};

export default ButtonGeneric;
