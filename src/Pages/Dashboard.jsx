import React from "react";
import SeverityCard from "../components/SeverityCard";
import ScanDetails from "../components/ScanDetails";
import ScanTable from "../components/ScanTable";
const Dashboard = () => {
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
    },
    {
      id: 2,
      severity: "High",
      color: "bg-yellow-500",
      noofseverity: 8,
      change: "+0.9% increase than yesterday",
    },
    {
      id: 3,
      severity: "Medium",
      color: "bg-green-500",
      noofseverity: 5,
      change: "+0.9% decrease than yesterday",
    },
    {
      id: 4,
      severity: "Low",
      color: "bg-blue-500",
      noofseverity: 3,
      change: "+0.9% increase than yesterday",
    },
  ];

  return (
    <div className="p-1">
    <div className="bg-white shadow-sm p-6 space-y-8">

      <ScanDetails {...scanData[0]} />

      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-4 max-w-6xl">
        {severityData.map((item) => (
          <SeverityCard key={item.id} {...item} />
        ))}
      </div>

        {/* Table Section */}
      <div className="w-full">
        <ScanTable />
      </div>

    </div>
  </div>
  );
};

export default Dashboard;