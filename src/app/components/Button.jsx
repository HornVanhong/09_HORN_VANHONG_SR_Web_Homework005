import React from "react";

function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition"
    >
      Back
    </button>
  );
}

export default Button;
