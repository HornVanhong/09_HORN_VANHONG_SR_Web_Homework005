import React from "react";

function Popup({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-700 rounded-2xl w-[420px] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
    
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <h2 className="text-white font-bold text-base">Item Details</h2>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-gray-600 hover:bg-gray-700 text-white text-sm font-medium transition"
          >
            Close
          </button>
        </div>

    
        <div className="px-6 pb-6 space-y-2">
          <p className="text-white text-sm">
            <span className="font-bold">ID:</span> {item.id}
          </p>
          <p className="text-white text-sm">
            <span className="font-bold">Name:</span> {item.item_name}
          </p>
          <p className="text-white text-sm">
            <span className="font-bold">Price:</span> ${item.item_price}
          </p>
          <div>
            <p className="text-white text-sm font-bold">Description:</p>
            <p className="text-white text-sm mt-1 leading-relaxed">
              {item.item_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
