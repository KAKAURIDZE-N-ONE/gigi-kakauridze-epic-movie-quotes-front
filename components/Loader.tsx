import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[3131] bg-[#0008]">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
