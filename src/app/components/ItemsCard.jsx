import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

function ItemsCard({ name, price, desc, img, bookmarked, onBookmark, onView }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-800">
      <img src={img} alt={name} className="w-16 h-16 rounded-lg object-cover" />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-bold">{name}</span>
          <span className="text-gray-400 text-sm">${price}</span>
          <button onClick={onBookmark}>
            {bookmarked ? (
              <FaBookmark className="text-yellow-400" />
            ) : (
              <FaRegBookmark className="text-gray-400" />
            )}
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
      </div>

      <button
        onClick={onView} 
        className="bg-indigo-900 hover:bg-indigo-700 px-5 py-2 rounded-lg text-sm font-semibold"
      >
        View
      </button>
    </div>
  );
}

export default ItemsCard;
