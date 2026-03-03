import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box } from "@mui/material";

const columns = [
  { field: "scanName", headerName: "Scan Name", flex: 1.5},
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
          className="bg-[#0CC8A8] h-2 rounded"
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
  width: 180,                 
  align: "center",
  headerAlign: "center",
  sortable: false,

  renderCell: (params) => {
    const v = params.row.vulnerability;

    return (
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center justify-center">
          <div className="w-6 h-6 flex items-center justify-center text-xs bg-red-500 text-white rounded-md">
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

const ScanTable = ({ dark }) => {
  const [search, setSearch] = useState("");

  const filteredRows = rows.filter((row) =>
    row.scanName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
  sx={{
    width: "100%",
    p: 2,
    borderRadius: 2,
    backgroundColor: dark ? "#1A1A1A" : "#ffffff",
    border: dark ? "1px solid #374151" : "1px solid #e5e7eb",
  }}
>
      
      {/* Search */}
      <div className="flex items-center gap-3 mb-2">

  <TextField
    label="Search Scan"
    variant="outlined"
    size="small"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{
      flex: 1,   // 🔥 this makes it grow but not 100%
      input: {
        color: dark ? "#e5e7eb" : "#111827",
      },
      label: {
        color: dark ? "#9ca3af" : "#6b7280",
      },
      "& .MuiOutlinedInput-root": {
        backgroundColor: dark ? "#1F1F1F" : "#ffffff",
        "& fieldset": {
          borderColor: dark ? "#4b5563" : "#d1d5db",
        },
      },
    }}
  />

  <button className="px-4 py-2 rounded-lg bg-[#0CC8A8] text-white text-sm">
    Filter
  </button>
  <button className="px-4 py-2 rounded-lg bg-[#0CC8A8] text-white text-sm">
    Column
  </button>
  <button className="px-4 py-2 rounded-lg bg-[#0CC8A8] text-white text-sm">
    New Scan
  </button>

</div>

      {/* DataGrid */}
      <DataGrid
  rows={filteredRows}
  columns={columns}
  autoHeight
  pageSizeOptions={[5, 10]}
  disableRowSelectionOnClick
  sx={{
    border: "none",
    backgroundColor: dark ? "#1A1A1A" : "#ffffff",
    color: dark ? "#e5e7eb" : "#111827",

    // 🔥 FIX HEADER BACKGROUND
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: dark ? "#1F1F1F !important" : "#f9fafb",
      borderBottom: dark ? "1px solid #2a2a2a" : "1px solid #e5e7eb",
    },

    "& .MuiDataGrid-columnHeader": {
      backgroundColor: dark ? "#1F1F1F !important" : "#f9fafb",
    },

    "& .MuiDataGrid-columnHeaderTitle": {
      color: dark ? "#9ca3af" : "#6b7280",
      fontWeight: 500,
    },

    "& .MuiDataGrid-cell": {
      borderColor: dark ? "#2a2a2a" : "#e5e7eb",
    },

    "& .MuiDataGrid-row:hover": {
      backgroundColor: dark ? "#232323" : "#f3f4f6",
    },

    "& .Mui-selected": {
      backgroundColor: dark ? "#2a2a2a !important" : "#e5e7eb !important",
    },

    "& .Mui-selected:hover": {
      backgroundColor: dark ? "#333333 !important" : "#d1d5db !important",
    },

    "& .MuiDataGrid-footerContainer": {
      backgroundColor: dark ? "#1F1F1F !important" : "#ffffff",
    },
  }}
/>
    </Box>
  );
};

export default ScanTable;