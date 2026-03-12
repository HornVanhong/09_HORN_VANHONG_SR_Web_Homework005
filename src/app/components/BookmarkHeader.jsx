import React from "react";
import { Bookmark, ArrowDownAZ, ArrowUpZA } from "lucide-react";

function BookmarkHeader({ sortOrder, onSortAsc, onSortDesc, onShowBookmarks }) {
  return (
    <div className="flex items-center gap-3 text-white justify-center">
      <div
        onClick={onShowBookmarks}
        className="flex items-center gap-2 text-white hover:text-orange-400  cursor-pointer"
      >
        <span className="font-semibold text-base">Your Bookmark</span>
        <Bookmark size={20} />
      </div>

      <button
        onClick={onSortAsc}
        title="Sort A -> Z"
        className={`p-1 rounded transition ${
          sortOrder === "asc"
            ? "text-indigo-400"
            : "text-white hover:text-orange-400 "
        }`}
      >
        <ArrowDownAZ size={22} />
      </button>

      <button
        onClick={onSortDesc}
        title="Sort Z -> A"
        className={`p-1 rounded transition ${
          sortOrder === "desc"
            ? "text-indigo-400"
            : "text-white hover:text-orange-400 "
        }`}
      >
        <ArrowUpZA size={22} />
      </button>
    </div>
  );
}

export default BookmarkHeader;
