import React from "react";
import useProfileImage from "./useProfileImage";
import defaultProfileImage from "@/public/images/defaultProfileImage.png";
import Confirm from "@/svgs/Confirm";
import Close from "@/svgs/Close";

const ProfileImage: React.FC = () => {
  const {
    user,
    preview,
    handleImageChange,
    file,
    discardUpload,
    handleUploadImage,
    isPending,
  } = useProfileImage();
  console.log(file);
  return (
    <div className="flex flex-col gap-2 items-center pt-8">
      <label className="rounded-full relative" htmlFor="profileImage">
        <div className="relative rounded-full">
          <div
            style={{
              backgroundImage: preview
                ? `url(${preview})`
                : user?.avatar
                ? `url(${user?.avatar})`
                : `url(${defaultProfileImage.src})`,
            }}
            className="bg-center bg-no-repeat bg-cover rounded-full w-[11.75rem] h-[11.75rem]"
          ></div>
          {isPending && (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="loader"></div>
              </div>
            </>
          )}
        </div>
        {file !== null && (
          <>
            <button
              onClick={handleUploadImage}
              className="absolute top-0 -right-8
          text-white"
            >
              <Confirm />
            </button>
            <button
              onClick={discardUpload}
              className="absolute top-0 -left-8
          text-white opacity-90"
            >
              <Close />
            </button>
          </>
        )}
      </label>
      <input
        onChange={handleImageChange}
        className="hidden"
        id="profileImage"
        type="file"
      />
      <label
        className="text-xl text-white cursor-pointer"
        htmlFor="profileImage"
      >
        Upload new photo
      </label>
    </div>
  );
};

export default ProfileImage;
