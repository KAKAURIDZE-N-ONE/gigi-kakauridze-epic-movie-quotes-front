import Pencil from "@/components/icons/Pencil";
import Trash from "@/components/icons/Trash";
import React from "react";
import { Props } from "./types";
import { useDispatch } from "react-redux";
import { updateActiveMovieModal } from "@/store/slices/modalSlice";

const EditAndDeleteButtons: React.FC<Props> = ({
  movieId,
  handleDeleteMovie,
  deleteMovieIsPending,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`
         flex items-center justify-between bg-normalBlue  rounded-[0.625rem] h-[2.5rem] w-36 overflow-hidden`}
    >
      {movieId && (
        <div
          onClick={() => dispatch(updateActiveMovieModal("edit"))}
          className="w-full flex items-center justify-center hover:bg-slate-600 transition-all duration-200 h-full cursor-pointer"
        >
          <Pencil />
        </div>
      )}
      <div className="h-2/3 w-px bg-gray "></div>
      {movieId && (
        <div
          onClick={() => handleDeleteMovie(movieId)}
          className={`${
            deleteMovieIsPending ? "pointer-events-none" : "hover:bg-slate-600"
          }
        w-full flex items-center justify-center  transition-all duration-200 h-full cursor-pointer`}
        >
          <Trash />
        </div>
      )}
    </div>
  );
};

export default EditAndDeleteButtons;
