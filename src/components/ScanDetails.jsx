import React from "react";

const ScanDetails = ({
  org,
  owner,
  totalscans,
  scheduled,
  rescans,
  failedscans,
  lastupdate,
}) => {
  return (
    <div className="flex flex-wrap gap-6 text-sm border-b pb-4 text-gray-700">
      <div><strong>Org:</strong> {org}</div>
      <div><strong>Owner:</strong> {owner}</div>
      <div><strong>Total:</strong> {totalscans}</div>
      <div><strong>Scheduled:</strong> {scheduled}</div>
      <div><strong>Rescans:</strong> {rescans}</div>
      <div><strong>Failed:</strong> {failedscans}</div>
      <div><strong>Updated:</strong> {lastupdate}</div>
    </div>
  );
};

export default ScanDetails;