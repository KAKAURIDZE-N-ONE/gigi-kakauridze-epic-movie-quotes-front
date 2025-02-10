import React from "react";
import { useDispatch } from "react-redux";
import { Props } from "./types";
import defaultProfileImage from "@/public/images/defaultProfileImage.png";
import Link from "next/link";
import { updateBurgerMenuIsOpen } from "@/store/slices/modalSlice";
import House from "@/svgs/House";
import Camera from "@/svgs/Camera";

const InnerNavigation: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="flex items-center gap-[1.25rem]">
        <div
          style={{
            backgroundImage: user?.avatar
              ? `url(${user?.avatar})`
              : `url(${defaultProfileImage.src})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-[2.5rem] h-[2.5rem]
  rounded-full"
        ></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[1.25rem] text-white">{user?.name}</h3>
          <Link
            href="/profile"
            onClick={() => dispatch(updateBurgerMenuIsOpen(false))}
            className="text-sm text-white2 cursor-pointer hover:text-white transition-all duration-300"
          >
            Edit your profile
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8 pl-1">
        <Link
          onClick={() => dispatch(updateBurgerMenuIsOpen(false))}
          href="/news-feed"
          className="flex items-center gap-[1.875rem]"
        >
          <House />
          <h2 className="text-xl text-white">News feed</h2>
        </Link>
        <Link
          onClick={() => dispatch(updateBurgerMenuIsOpen(false))}
          href="/movies"
          className="flex items-center gap-[1.875rem]"
        >
          <Camera />
          <h2 className="text-xl text-white">List of movies</h2>
        </Link>
      </div>
    </div>
  );
};

export default InnerNavigation;
