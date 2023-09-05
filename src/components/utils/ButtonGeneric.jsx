import React from "react";

const ButtonGeneric = ({ disabled, label }) => {
  return (
    <button
      disabled={disabled}
      className={
        disabled
          ? "text-gray-100 bg-purple-400 py-2 px-10 mb-5 rounded w-full"
          : "text-white bg-purple-600 py-2 px-10 mb-5 rounded w-full"
      }
    >
      {label}
    </button>
  );
};

export default ButtonGeneric;
