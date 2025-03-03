import SmallSearch from "@/components/icons/SmallSearch";
import XIcon from "@/components/icons/XIcon";
import React from "react";
import { Props } from "./types";
import useSearch from "./useSearch";

const Search: React.FC<Props> = ({
  searchIsOpen,
  searchValue,
  setSearchValue,
  setSearchIsOpen,
}) => {
  const { inputRef, t } = useSearch({ searchIsOpen });

  return (
    <div>
      {!searchIsOpen && (
        <div
          onClick={() => setSearchIsOpen(true)}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <SmallSearch />
          <p className="text-xl text-white2 group-hover:text-white text-nowrap select-none transition-all duration-200">
            {t("search")}
          </p>
        </div>
      )}
      {searchIsOpen && (
        <div className="relative">
          <input
            ref={inputRef}
            className="bg-transparent focus:outline-none border-b border-b-gray text-lg pl-2 pr-10 w-full"
            placeholder={t("placeholder")}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSearchIsOpen(false);
              setSearchValue("");
            }}
            className="absolute z-20 top-1/2 -translate-y-1/2 right-0 p-1 rounded-full hover:bg-[#ffffff20] cursor-pointer transition-colors duration-200"
          >
            <XIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
