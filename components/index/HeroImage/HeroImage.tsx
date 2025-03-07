import React from "react";
import { Props } from "./types";

const HeroImage: React.FC<Props> = ({ url, quote, description, translate }) => {
  return (
    <div className="h-[100vh] sticky top-0">
      <div className={`max-h-0`}>
        <div
          className="w-full h-[100vh]"
          style={{
            backgroundPosition: `50% 50%`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${url.src})`,
          }}
        />
      </div>
      <div
        className="sticky top-0 left-0 right-0 h-full z-10 
    bg-[linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,0)_100%)]
    text-white flex items-center"
      >
        <div
          className={`lg:${translate ? translate : ""}
          flex flex-col gap-3 lg:gap-5 lg:ml-52 pr-4 relative
          ml-14`}
        >
          <div
            className="absolute w-[1rem] lg:w-[3.3125rem] border border-white 
          lg:-left-[4.3rem] lg:top-9 -left-6 top-3"
          ></div>
          <h2
            className="montserrat font-bold text-xl lg:text-[3.125rem] leading-[1.875rem] lg:leading-[4.6875rem] 
          lg:max-w-[53rem] max-w-[19rem]"
          >
            {quote}
          </h2>
          <h3 className="lg:text-3xl font-bold text-white1">{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
