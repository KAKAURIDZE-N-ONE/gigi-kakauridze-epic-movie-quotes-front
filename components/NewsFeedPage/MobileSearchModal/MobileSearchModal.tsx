import ArrowLeft from "@/components/icons/ArrowLeft";
import { updateSearchIsOpen } from "@/store/slices/newsFeedSlice";
import React from "react";
import { Props } from "./types";
import useMobileSearchModal from "./useMobileSearchModal";

const MobileSearchModal: React.FC<Props> = ({
  searchValue,
  setSearchValue,
}) => {
  const { dispatch, inputRef, t } = useMobileSearchModal();

  return (
    <div className="fixed top-0 h-full left-0 w-full  z-[80] pointer-events-none">
      <div className="h-[5.375rem] bg-darkestBlue px-[2.1875rem] flex items-center border-b border-b-[#EFEFEF4D] pointer-events-auto">
        <div
          className="cursor-pointer"
          onClick={() => {
            dispatch(updateSearchIsOpen(false));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <ArrowLeft className="w-5 h-5" />
        </div>
        <div className="w-full relative">
          <input
            ref={inputRef}
            placeholder={t("search_mobile")}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="focus:outline-none bg-darkestBlue ml-4 placeholder:text-white w-full py-2"
          />
        </div>
      </div>
      {!searchValue && (
        <div className="h-full bg-darkestBlue pointer-events-auto">
          <div className="flex flex-col gap-7 px-[4.35rem] pt-8">
            <h2 className="text-white2">
              {t("enter")} <span className="text-white font-bold">@</span>{" "}
              {t("validation_movie")}
            </h2>
            <h2 className="text-white2">
              {t("enter")} <span className="text-white font-bold">#</span>{" "}
              {t("validation_quote")}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSearchModal;
