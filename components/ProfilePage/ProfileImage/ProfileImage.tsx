import useProfileImage from "./useProfileImage";
import defaultProfileImage from "@/public/images/defaultProfileImage.png";

const ProfileImage: React.FC = () => {
  const {
    user,
    preview,
    handleImageChange,
    imageUploadIsPending,
    userIsPending,
    t,
  } = useProfileImage();

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
            className={`
              ${userIsPending ? "opacity-0" : ""}
              bg-center bg-no-repeat bg-cover rounded-full w-[11.75rem] h-[11.75rem] `}
          ></div>

          {(imageUploadIsPending || userIsPending) && (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="loader"></div>
              </div>
            </>
          )}
        </div>
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
        {t("photo_header")}
      </label>
    </div>
  );
};

export default ProfileImage;
