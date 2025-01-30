import React from "react";
import { Props } from "./types";

const HeroImage: React.FC<Props> = ({ url }) => {
  return (
    <div className="h-[100vh]">
      <div className={`top-0 sticky left-0 max-h-0`}>
        <div
          className="w-full h-[100vh]"
          style={{
            backgroundPosition: `50% 50%`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${url.src})`,
          }}
        />
      </div>
    </div>
  );
};

export default HeroImage;
