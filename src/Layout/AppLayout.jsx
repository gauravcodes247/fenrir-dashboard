import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Navbar from "../components/Navbar";
import Scans from "../Pages/Scans";
const AppLayout = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
  className={`h-screen flex  ${
    dark
      ? "bg-[#121212] text-gray-200"
      : "bg-[#F5F5F5] text-gray-900"
  }`}
>

  {/* Sidebar */}
  <SideBar dark={dark} />

  {/* Right side */}
  <div className="flex-1 flex flex-col">

    {/* Navbar */}
    <div
  className={`h-[60px] border-b flex items-center px-6 shrink-0 ${
    dark
      ? "bg-[#1A1A1A] border-gray-800"
      : "bg-white border-gray-200"
  }`}
>
      <Navbar dark={dark} setDark={setDark} />
    </div>

    {/* Scrollable content */}
    <div className="flex-1 overflow-y-auto p-3">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scans" element={<Scans />} />
      </Routes>
    </div>

  </div>

</div>
  );
};

export default AppLayout;