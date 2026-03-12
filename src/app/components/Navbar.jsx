import React from 'react'

function Navbar() {
  return (
    <nav className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <img
          src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
          alt=""
          className="w-9 h-9 rounded-full"
        />
        <span className="font-semibold">Dashbord</span>
      </div>
      <input
        placeholder="Search by item more..."
        className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none w-64"
      ></input>
    </nav>
  );
}

export default Navbar