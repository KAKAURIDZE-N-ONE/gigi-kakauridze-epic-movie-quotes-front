import React from "react";
import { Props } from "./types";
import defaultProfileImage from "@/public/images/defaultProfileImage.png";

const UserShortDescription: React.FC<Props> = ({ avatar, name }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        style={{
          backgroundImage: `url(${avatar ? avatar : defaultProfileImage.src})`,
        }}
        className="bg-no-repeat bg-center bg-cover w-12 h-12 rounded-full"
      ></div>
      <h3 className="text-xl">{name}</h3>
    </div>
  );
};

export default UserShortDescription;
