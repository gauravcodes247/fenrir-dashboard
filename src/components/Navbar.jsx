import React from "react";

const Navbar = ({ dark, setDark }) => {
  return (
    <div className="flex w-full items-center justify-between">

      {/* Title */}
      <h2 className="text-sm font-semibold">
        Dashboard
      </h2>

      {/* Actions */}
      <div className="flex items-center gap-3">

        <button
          className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Export Scan
        </button>

        <button
          className="px-3 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Stop Scan
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 cursor-pointer"
        >
          {dark ? "Light" : "Dark"}
        </button>

      </div>
    </div>
  );
};

export default Navbar;