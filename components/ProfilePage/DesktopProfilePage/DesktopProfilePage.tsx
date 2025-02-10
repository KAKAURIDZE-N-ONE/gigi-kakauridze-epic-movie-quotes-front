import React from "react";
import { ProfileImage } from "../ProfileImage";
import { Input } from "@/components/Input";
import useDesktopProfilePage from "./useDesktopProfilePage";

const DesktopProfilePage: React.FC = () => {
  const { user, activeEditField, setActiveEditField } = useDesktopProfilePage();

  return (
    <div className="">
      <div className="flex flex-col gap-10  mr-36">
        <h2 className="ml-8 text-2xl font-medium">My profile</h2>
        <div className="w-full max-w-[68rem] bg-darkerBlue mt-20 rounded-xl relative">
          <div className="absolute -top-[6.5rem] left-1/2 -translate-x-1/2 z-30 ">
            <ProfileImage />
          </div>
          <div className="pb-24">
            <div className="mt-[12rem] mx-40">
              <div className="max-w-[40rem] mx-auto">
                <div className="flex flex-col gap-10">
                  <div className="flex">
                    <div className="w-full relative">
                      <Input value={user?.name}>Username</Input>
                      <h3
                        onClick={() => setActiveEditField("username")}
                        className="text-white2 text-xl absolute -right-14 bottom-[0.37rem] cursor-pointer"
                      >
                        Edit
                      </h3>
                    </div>
                  </div>
                  {activeEditField === "username" && (
                    <Input>New username</Input>
                  )}
                  <Input value={user?.email}>Email</Input>
                  <div className="flex">
                    <div className="w-full relative">
                      <Input type="password" value={"••••••••••••"}>
                        Password
                      </Input>
                      <h3
                        onClick={() => setActiveEditField("password")}
                        className="text-white2 text-xl absolute -right-14 bottom-[0.37rem] cursor-pointer"
                      >
                        Edit
                      </h3>
                    </div>
                  </div>
                  {activeEditField === "password" && (
                    <div className="flex flex-col gap-10">
                      <Input type="password">New password</Input>
                      <Input type="password">Confirm new password</Input>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopProfilePage;
