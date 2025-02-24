import React from "react";
import { Props } from "./types";
import defaultProfileImage from "@/public/images/defaultProfileImage.png";
import Link from "next/link";
import { updateBurgerMenuIsOpen } from "@/store/slices/modalSlice";
import House from "@/components/icons/House";
import Camera from "@/components/icons/Camera";
import useInnerNavigation from "./useInnerNavigation";

const InnerNavigation: React.FC<Props> = ({ user }) => {
  const { pathname, dispatch, t } = useInnerNavigation();

  return (
    <div className="w-full">
      <div className="flex items-center gap-[1.25rem]">
        <div
          style={{
            backgroundImage: user?.avatar
              ? `url(${user?.avatar})`
              : `url(${defaultProfileImage.src})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-[3rem] h-[3rem]
  rounded-full"
        ></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[1.25rem] text-white">{user?.name}</h3>
          <Link
            href="/profile"
            onClick={() => dispatch(updateBurgerMenuIsOpen(false))}
            className="text-sm text-white2 cursor-pointer hover:text-white transition-all duration-300"
          >
            {t("profile")}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8 lg:mt-6 pl-1 ml-2">
        <Link
          onClick={() => dispatch(updateBurgerMenuIsOpen(false))}
          href="/news-feed"
          className="flex items-center gap-[1.875rem] group"
        >
          <House isActive={pathname === "/news-feed"} />
          <h2
            className={`text-xl text-white ${
              pathname !== "/news-feed" ? "group-hover:text-gray" : ""
            } transition-all duration-200`}
          >
            {t("news_feed")}
          </h2>
        </Link>
        <Link
          onClick={() => dispatch(updateBurgerMenuIsOpen(false))}
          href="/movies"
          className="flex items-center gap-[1.8575rem] group"
        >
          <Camera isActive={pathname === "/movies"} />
          <h2
            className={`text-xl text-white ${
              pathname !== "/movies" ? "group-hover:text-gray" : ""
            } transition-all duration-200`}
          >
            {t("movies")}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default InnerNavigation;
