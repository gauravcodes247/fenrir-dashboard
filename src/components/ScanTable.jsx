import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box } from "@mui/material";

const columns = [
  { field: "scanName", headerName: "Scan Name", flex: 1.5 },
  { field: "type", headerName: "Type", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  {
  field: "progress",
  headerName: "Progress",
  flex: 1,
  renderCell: (params) => (
    <div className="w-full flex items-center gap-2">
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${params.value}%` }}
        />
      </div>
      <span className="text-xs">{params.value}%</span>
    </div>
  ),
},
  {
    field: "vulnerability",
    headerName: "Vulnerability",
    flex: 1.5,
    renderCell: (params) => {
      const v = params.row.vulnerability;

      return (
        <div className="flex gap-2">
          <div className="w-6 h-6 flex items-center justify-center text-xs bg-red-500 text-white rounded-sm">
            {v.critical}
          </div>
          <div className="w-6 h-6 flex items-center justify-center text-xs bg-orange-500 text-white rounded-sm">
            {v.high}
          </div>
          <div className="w-6 h-6 flex items-center justify-center text-xs bg-yellow-400 text-black rounded-sm">
            {v.medium}
          </div>
          <div className="w-6 h-6 flex items-center justify-center text-xs bg-green-500 text-white rounded-sm">
            {v.low}
          </div>
        </div>
      );
    },
  },
  { field: "lastScan", headerName: "Last Scan", flex: 1 },
];

const rows = [
  {
    id: 1,
    scanName: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    lastScan: "4d ago",
    vulnerability: { critical: 5, high: 12, medium: 23, low: 18 },
  },
  {
    id: 2,
    scanName: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    lastScan: "4d ago",
    vulnerability: { critical: 5, high: 12, medium: 23, low: 18 },
  },
  {
    id: 3,
    scanName: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    lastScan: "4d ago",
    vulnerability: { critical: 5, high: 12, medium: 23, low: 18 },
  },
  {
    id: 4,
    scanName: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    lastScan: "4d ago",
    vulnerability: { critical: 5, high: 12, medium: 23, low: 18 },
  },
  {
    id: 5,
    scanName: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    lastScan: "4d ago",
    vulnerability: { critical: 5, high: 12, medium: 23, low: 18 },
  },
  {
    id: 6,
    scanName: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    lastScan: "4d ago",
    vulnerability: { critical: 5, high: 12, medium: 0, low: 0 },
  },
  {
    id: 7,
    scanName: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    lastScan: "4d ago",
    vulnerability: { critical: 5, high: 12, medium: 0, low: 0 },
  },
  {
    id: 8,
    scanName: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    lastScan: "3d ago",
    vulnerability: { critical: 2, high: 4, medium: 8, low: 1 },
  },
  {
    id: 9,
    scanName: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    lastScan: "3d ago",
    vulnerability: { critical: 2, high: 4, medium: 8, low: 1 },
  },
  {
    id: 10,
    scanName: "Internal APIs",
    type: "Greybox",
    status: "Running",
    progress: 65,
    lastScan: "1d ago",
    vulnerability: { critical: 3, high: 7, medium: 10, low: 4 },
  },
];

const ScanTable = () => {
  const [search, setSearch] = useState("");

  const filteredRows = rows.filter((row) =>
    row.scanName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%", backgroundColor: "white", p: 2, borderRadius: 2 }}>
      
      {/* Search */}
      <TextField
        label="Search Scan"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* DataGrid */}
      <DataGrid
        rows={filteredRows}
        columns={columns}
        autoHeight
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
};

export default ScanTable;