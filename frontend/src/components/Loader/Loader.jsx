import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full ">
      <div className="w-10 h-10 animate-spin rounded-full border-dashed border-8 border-[#3b9df8]"></div>
    </div>
  );
};

export default Loader;
