import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="bg-white shadow-md p-6 h-40 rounded-lg flex items-center justify-center animate-pulse">
      <div className="w-full h-full bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
