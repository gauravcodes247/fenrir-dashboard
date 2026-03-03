import React from "react";
import { NavLink } from "react-router-dom";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
const SideBar = ({ dark }) => {
  const navItem =
    "flex items-center px-4 py-2.5 text-sm rounded-lg ";

  const getNavClass = (isActive) =>
    isActive
      ? `${navItem} bg-[#0CC8A8]/15 text-[#0CC8A8] font-medium border-l-4 border-[#0CC8A8]`
    : `${navItem} ${
    dark
      ? "text-gray-400 hover:bg-[#0CC8A8]/10 hover:text-[#0CC8A8]"
      : "text-gray-600 hover:bg-[#0CC8A8]/10 hover:text-[#0CC8A8]"
  }`;

  return (
    <div
  className={`flex flex-col justify-between h-screen w-[240px] border-r p-5  ${
    dark
      ? "bg-[#1A1A1A] border-gray-800"
      : "bg-white border-gray-200"
  }`}
>

      {/* TOP SECTION */}
      <div className="space-y-8">

        {/* Logo */}
        <h1
  className={`text-xl font-semibold tracking-tight ${
    dark ? "text-gray-200" : "text-gray-900"
  }`}
>
          Aps
        </h1>

        {/* Main Navigation */}
        <nav className="space-y-2">


          <NavLink to="/" className={({ isActive }) => getNavClass(isActive)}>
           <DashboardCustomizeIcon className="mr-3" /> Dashboard
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) => getNavClass(isActive)}>
           <ContentPasteIcon className="mr-3" /> Projects
          </NavLink>
<div className="relative">
          <NavLink to="/scans" className={({ isActive }) => getNavClass(isActive)}>
          <span className="absolute rounded-[50%] h-1.75 w-1.75 bg-red-500 bottom-[8px]"></span>
          <FindInPageIcon className="mr-3" />  Scans
          </NavLink>
</div>

          <NavLink to="/schedule" className={({ isActive }) => getNavClass(isActive)}>
             <CalendarTodayIcon className="mr-3" /> Schedule
          </NavLink>

        </nav>

        {/* Secondary Navigation */}
        <nav className="space-y-2 pt-6 border-t border-gray-100">

<div className="relative">
          <NavLink to="/notifications" className={({ isActive }) => getNavClass(isActive)}>
          <span className="absolute rounded-[50%] h-1.75 w-1.75 bg-red-500 bottom-[9px] left-4"></span>
          <NotificationsActiveIcon className="mr-3" />  Notifications
          </NavLink>
</div>

          <NavLink to="/settings" className={({ isActive }) => getNavClass(isActive)}>
         <SettingsIcon className="mr-3" />   Settings
          </NavLink>

          <NavLink to="/support" className={({ isActive }) => getNavClass(isActive)}>
       <InfoIcon className="mr-3" />     Support
          </NavLink>

        </nav>

      </div>

      {/* Bottom Profile */}
      <div
  className={`border-t pt-4 ${
    dark ? "border-gray-800" : "border-gray-200"
  }`}
>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-200" />
          <div>
            <p className={`text-sm font-medium ${dark ? "text-gray-200" : "text-gray-900"}`}>Nammagiri</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SideBar;