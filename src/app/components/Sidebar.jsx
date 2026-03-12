"use client";

const menuItems = ["Overview", "Items", "Orders", "Customers", "Settings"];

export default function Sidebar() {
  return (
    <aside className="w-52 bg-gray-900 border-r border-gray-800 p-4">
      <p className="text-xs text-gray-500 mb-3 tracking-widest">MENU</p>

      {menuItems.map((item) => (
        <div
          key={item}
          className="px-4 py-2 rounded-lg cursor-pointer mb-1 text-sm text-gray-400 hover:text-white"
        >
          {item}
        </div>
      ))}
    </aside>
  );
}
