import React from "react";

const Scans = ({ dark }) => {
  const cardStyle = dark
    ? "bg-[#1A1A1A] border border-gray-800"
    : "bg-white border border-gray-200";

  return (
    <div className="space-y-6">

    

{/* === TOP SUMMARY SECTION === */}
{/* === TOP SUMMARY SECTION === */}
<div className={`rounded-xl p-8 ${cardStyle}`}>
  <div className="flex items-center gap-12">

    {/* Percent Blob */}
    <div className="w-28 h-28 rounded-full bg-[#0CC8A8]/10 flex items-center justify-center">
      <span className="text-2xl font-semibold text-[#0CC8A8]">
        0%
      </span>
    </div>

    {/* Stepper */}
    <div className="flex-1 flex items-center justify-between relative">

      {["Spidering", "Mapping", "Testing", "Validating", "Reporting"].map(
        (step, index) => {
          const currentStep = 1; // change to control active step
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center flex-1 relative">

              {/* Connector Line */}
              {index !== 0 && (
                <div
                  className={`absolute top-4 -left-1/2 w-full h-[2px] ${
                    isCompleted ? "bg-[#0CC8A8]" : "bg-gray-300"
                  }`}
                />
              )}

              {/* Circle */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium z-10
                ${
                  isCompleted
                    ? "bg-[#0CC8A8] text-white"
                    : isActive
                    ? "border-2 border-[#0CC8A8] text-[#0CC8A8] bg-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1}
              </div>

              {/* Label */}
              <span
                className={`mt-3 text-xs ${
                  isActive
                    ? "text-[#0CC8A8] font-medium"
                    : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </div>
          );
        }
      )}
    </div>

  </div>
</div>

      {/* === MAIN GRID SECTION === */}
      <div className="grid grid-cols-2 gap-6">

        {/* LEFT: Console */}
        <div className={`rounded-xl p-6 ${cardStyle}`}>
  <h3 className="text-sm font-semibold mb-4">
    Live Scan Console
  </h3>

  <div className="h-96 overflow-y-auto text-xs font-mono bg-white text-black p-4 rounded-lg space-y-1 border-1 border-gray-300">
    <p>[00:00:01] Initializing scan...</p>
    <p>[00:00:05] Performing reconnaissance...</p>
    <p>[00:00:08] Mapping target structure...</p>
  </div>
</div>

        {/* RIGHT: Findings */}
        <div className={`rounded-xl p-6 ${cardStyle}`}>
  <h3 className="text-sm font-semibold mb-4">
    Finding Log
  </h3>

  <div className="space-y-4">

    {/* Critical */}
    <div className="flex items-center justify-between p-4 rounded-lg border border-red-200 bg-red-50">
      <span className="text-sm">
        <span className="px-2 py-1 text-xs font-medium rounded bg-red-500 text-white mr-2">
          Critical
        </span>
        SQL Injection detected
      </span>
      <span className="text-xs text-gray-500">10:45:23</span>
    </div>

    {/* High */}
    <div className="flex items-center justify-between p-4 rounded-lg border border-orange-200 bg-orange-50">
      <span className="text-sm">
        <span className="px-2 py-1 text-xs font-medium rounded bg-orange-500 text-white mr-2">
          High
        </span>
        Unauthorized access
      </span>
      <span className="text-xs text-gray-500">10:45:23</span>
    </div>

    {/* Medium */}
    <div className="flex items-center justify-between p-4 rounded-lg border border-yellow-200 bg-yellow-50">
      <span className="text-sm">
        <span className="px-2 py-1 text-xs font-medium rounded bg-yellow-500 text-white mr-2">
          Medium
        </span>
        Rate limiting missing
      </span>
      <span className="text-xs text-gray-500">10:45:23</span>
    </div>

  </div>
</div>

      </div>

    </div>
  );
};

export default Scans;