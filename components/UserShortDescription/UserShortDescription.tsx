import React from "react";
import { Props } from "./types";

const UserShortDescription: React.FC<Props> = ({ avatar, name }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        style={{
          backgroundImage: `url(${avatar})`,
        }}
        className="bg-no-repeat bg-center bg-cover w-10 h-10 rounded-full"
      ></div>
      <h3 className="text-xl">{name}</h3>
    </div>
  );
};

export default UserShortDescription;
