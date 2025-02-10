import React from "react";
import { Props } from "./types";

const InputUnderline: React.FC<Props> = ({
  type,
  value,
  editable,
  children,
  editClickFn,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p>{children}</p>
      <div className="flex items-center justify-between -mt-1">
        <p className="text-lg">{value}</p>
        {editable && editClickFn && (
          <p onClick={editClickFn} className="text-lg">
            Edit
          </p>
        )}
      </div>
      <div className="w-full border-b border-b-white2 opacity-50 mt-3"></div>
    </div>
  );
};

export default InputUnderline;
