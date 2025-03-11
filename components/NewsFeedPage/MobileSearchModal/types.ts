import { Dispatch, SetStateAction } from "react";

export type Props = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};
