import React from "react";

const PermissionCheckerLoader: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #181623, #191725, #0d0b14)",
      }}
      className="fixed left-0 w-full h-full flex items-center justify-center"
    >
      <div className="loader"></div>
    </div>
  );
};

export default PermissionCheckerLoader;
