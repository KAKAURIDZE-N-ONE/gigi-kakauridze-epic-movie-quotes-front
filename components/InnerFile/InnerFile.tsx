import Camera2 from "@/svgs/Camera2";
import React from "react";

const InnerFile: React.FC = () => {
  return (
    <div
      className="bg-darkerBlue border border-gray w-full rounded-[0.3rem] h-12 pl-4 
        placeholder:text-white min-h-[5.25rem] relative"
    >
      <label
        htmlFor="input"
        className="w-full absolute left-0 top-0 h-full "
      ></label>
      <input className="hidden" id="input" type="file" />
      <div className="h-full flex items-center gap-3">
        <Camera2 />
        <p className="text-xl">Drag & drop your image here or</p>
        <div
          className="cursor-pointer flex items-center justify-center bg-[#9747FF66] 
        py-2 px-3 rounded-sm ml-1"
        >
          <p className="text-lg">Choose file</p>
        </div>
      </div>
    </div>
  );
};

export default InnerFile;
