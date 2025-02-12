import { Button } from "@/components/Button";
import React from "react";
import useHero from "./useHero";

const Hero: React.FC = () => {
  const { t, getStarted } = useHero();

  return (
    <div
      className="flex  h-[80vh] items-center justify-center 
     bg-[linear-gradient(to_bottom,#11101A_20%,#08080D_90%,#00000000_250%)]"
    >
      <div className="flex flex-col items-center gap-7">
        <h1
          className="montserrat text-skin font-bold text-2xl lg:text-6xl
          max-w-[20rem] lg:max-w-[50rem] text-center leading-[2.25rem] lg:leading-[5.625rem]"
        >
          {t("hero_header")}
        </h1>
        <div className="hidden lg:inline-block">
          <Button clickFn={getStarted} size="medium" color="red">
            {t("get_started")}
          </Button>
        </div>
        <div className="lg:hidden">
          <Button clickFn={getStarted} size="normal" color="red">
            {t("get_started")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
