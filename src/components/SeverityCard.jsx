import React from "react";

const SeverityCard = ({ severity, color, noofseverity, change , dark ,}) => {
  return (
    <div
       className={`border rounded-xl p-4 transition-colors ${
        dark
          ? "bg-[#1F1F1F] border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center">
         <h3
          className={`text-sm font-medium ${
            dark ? "text-gray-100" : "text-gray-600"
          }`}
        >
          {severity} Severity
        </h3>
        <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      </div>

      <div
        className={`text-2xl font-semibold mt-2 ${
          dark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        {noofseverity}
      </div>

      <p
        className={`text-xs mt-1 ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {change}
      </p>
    </div>
  );
};

export default SeverityCard;