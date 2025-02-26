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
          className="bg-no-repeat bg-center bg-cover w-[3rem] h-[3rem]  lg:w-[3.75rem] lg:h-[3.75rem]
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
      <div className="flex flex-col gap-8 mt-8 lg:mt-8 pl-1 ml-2">
        <Link
          onClick={() => dispatch(updateBurgerMenuIsOpen(false))}
          href="/news-feed"
          className="flex items-center gap-[1.875rem] group"
        >
          <div className="lg:hidden">
            <House className="w-6 h-6" isActive={pathname === "/news-feed"} />
          </div>
          <div className="hidden lg:block">
            <House className="w-8 h-8" isActive={pathname === "/news-feed"} />
          </div>
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
          <div className="lg:hidden">
            <Camera className="w-6 h-6" isActive={pathname === "/movies"} />
          </div>
          <div className="hidden lg:block">
            <Camera className="w-8 h-8" isActive={pathname === "/movies"} />
          </div>
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
