import { Dispatch, SetStateAction } from "react";

export type Props = {
  searchIsOpen: boolean;
  searchValue: string;
  setSearchIsOpen: Dispatch<SetStateAction<boolean>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export type HookProps = {
  searchIsOpen: boolean;
};
