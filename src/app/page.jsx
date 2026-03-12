"use client";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ItemsCard from "./components/ItemsCard";
import { items } from "../app/items";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import BookmarkHeader from "./components/BookmarkHeader";
import Popup from "./components/Popup"; 

export default function Home() {
  const [itemList, setItemList] = useState(items);
  const [sortOrder, setSortOrder] = useState(null);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBookmark = (id) => {
    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item,
      ),
    );
  };

  const handleShowBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  const handleSortAsc = () => setSortOrder("asc");
  const handleSortDesc = () => setSortOrder("desc");

  useEffect(() => {
    let result = showBookmarks
      ? itemList.filter((item) => item.saved)
      : [...itemList];

    if (sortOrder === "asc") {
      result = result.sort((a, b) => a.item_name.localeCompare(b.item_name));
    } else if (sortOrder === "desc") {
      result = result.sort((a, b) => b.item_name.localeCompare(a.item_name));
    }

    setDisplayedItems(result);
  }, [itemList, showBookmarks, sortOrder]);

  return (
    <div className="flex flex-col h-screen">
      <nav className="h-16 bg-gray-900 border-b border-gray-800">
        <Navbar />
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-52 bg-gray-900 border-r border-gray-800">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto bg-gray-950 p-10 mt-5 ">
          <div className="fixed top-16 left-52 right-0 z-10 bg-gray-900 border-b border-gray-800 flex justify-between items-center px-10 py-3  ">
            <Button
              onClick={() => {
                setShowBookmarks(false);
                setSortOrder(null);
              }}
            />
            <BookmarkHeader
              sortOrder={sortOrder}
              onSortAsc={handleSortAsc}
              onSortDesc={handleSortDesc}
              onShowBookmarks={handleShowBookmarks}
            />
          </div>

          {displayedItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-3/4 text-gray-500">
              <p className="text-lg">No bookmarks yet</p>
              <p className="text-sm mt-1">
                Save items by clicking the bookmark icon
              </p>
            </div>
          ) : (
            displayedItems.map((item) => (
              <ItemsCard
                key={item.id}
                name={item.item_name}
                price={item.item_price}
                desc={item.item_description}
                img={item.image}
                bookmarked={item.saved}
                onBookmark={() => handleBookmark(item.id)}
                onView={() => setSelectedItem(item)}
              />
            ))
          )}
        </main>
      </div>

      <Popup item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
