import React from "react";

const SeverityCard = ({ severity, color, noofseverity, change }) => {
  return (
    <div className="border rounded-lg p-4">

      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-600">
          {severity} Severity
        </h3>
        <span className={`w-2.5 h-2.5 rounded-full ${color}`}></span>
      </div>

      <div className="text-2xl font-semibold mt-2 text-gray-900">
        {noofseverity}
      </div>

      <p className="text-xs text-gray-500 mt-1">
        {change}
      </p>

    </div>
  );
};

export default SeverityCard;