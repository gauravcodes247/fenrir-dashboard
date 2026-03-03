import React from "react";
import SeverityCard from "../components/SeverityCard";
import ScanDetails from "../components/ScanDetails";
import ScanTable from "../components/ScanTable";
const Dashboard = ({dark}) => {
  const scanData = [
    {
      org: "Project X",
      owner: "Nammagiri",
      totalscans: 100,
      scheduled: 1000,
      rescans: 100,
      failedscans: 100,
      lastupdate: "10 mins ago",
    },
  ];

  const severityData = [
    {
      id: 1,
      severity: "Critical",
      color: "bg-red-500",
      noofseverity: 86,
      change: "+2% increase than yesterday",
      tcolor: "bg-red-500"
    },
    {
      id: 2,
      severity: "High",
      color: "bg-yellow-500",
      noofseverity: 8,
      change: "+0.9% increase than yesterday",
      tcolor: "bg-red-500"
    },
    {
      id: 3,
      severity: "Medium",
      color: "bg-green-500",
      noofseverity: 5,
      change: "+0.9% decrease than yesterday",
      tcolor: "bg-green-500"
    },
    {
      id: 4,
      severity: "Low",
      color: "bg-blue-500",
      noofseverity: 3,
      change: "+0.9% increase than yesterday",
      tcolor: "bg-red-500"
    },
  ];

  return (
    <div className="p-1">
    <div
  className={`p-6 space-y-8 rounded-xl border ${
    dark
      ? "bg-[#1A1A1A] border-gray-800"
      : "bg-white border-gray-200"
  }`}
>

      <ScanDetails {...scanData[0]} dark={dark} />

      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-4 max-w-6xl">
        {severityData.map((item) => (
          <SeverityCard key={item.id} {...item} dark={dark} tcolor={item.tcolor} />
        ))}
      </div>

        {/* Table Section */}
      <div className="w-full">
        <ScanTable dark={dark}/>
      </div>

    </div>
  </div>
  );
};

export default Dashboard;