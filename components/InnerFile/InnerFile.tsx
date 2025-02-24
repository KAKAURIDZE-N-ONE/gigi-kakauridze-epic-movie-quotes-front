import Camera2 from "@/components/icons/Camera2";
import React from "react";
import { Props } from "./types";
import useInnerFile from "./useInnerFile";

const InnerFile: React.FC<Props> = ({
  control,
  register,
  error,
  savedImage,
  size,
  disabled = false,
  type,
}) => {
  const { imagePreview, t } = useInnerFile({ control });

  const hasImage = imagePreview || savedImage;
  return (
    <div className="flex flex-col">
      <div
        className={`${
          size === "big" ? "rounded-[0.625rem]" : "pl-4 py-4 border border-gray"
        }
          bg-darkerBlue  w-full rounded-[0.3rem] overflow-hidden 
      placeholder:text-white min-h-[5.25rem] relative flex items-center`}
      >
        <label
          htmlFor="input"
          className="w-full absolute left-0 top-0 h-full "
        ></label>
        <input
          disabled={disabled}
          {...register}
          className="hidden"
          id="input"
          type="file"
        />
        {size === "big" && type === "edit" && (
          <label
            htmlFor="input"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          flex items-center justify-center flex-col gap-3 px-5 py-4 bg-[#181623df] rounded-[0.625rem]"
          >
            <Camera2 />
            <p className="text-nowrap">{t("file_small")}</p>
          </label>
        )}
        {hasImage && (
          <div
            style={{
              backgroundImage: `url(${imagePreview || savedImage})`,
            }}
            className={`${
              size === "big" ? "aspect-[1.18]" : "aspect-[1.60]"
            } w-full bg-no-repeat bg-center bg-cover`}
          ></div>
        )}
        {size !== "big" && (
          <div
            className={`
          ${hasImage ? "gap-4" : "justify-between"}
          h-full flex items-center lg:justify-normal lg:gap-4 w-full`}
          >
            <div className="flex gap-3">
              {!hasImage && <Camera2 />}
              {!hasImage && (
                <p className="text-xl hidden lg:block">{t("file_large")}</p>
              )}
              {!hasImage && <p className="lg:hidden">{t("file_small")}</p>}
            </div>
            <div
              className={`${hasImage ? "lg:mx-auto" : ""}
          flex flex-col gap-5 lg:items-center `}
            >
              {hasImage && (
                <h3 className="text-sm font-bold text-skin">{t("replace")}</h3>
              )}
              {hasImage && (
                <div className=" items-center gap-6 hidden lg:flex">
                  <Camera2 />
                  <p className="text-xl hidden lg:block lg:pr-5 text-center">
                    {t("file_large")}
                  </p>
                </div>
              )}
              <div
                className="cursor-pointer flex items-center justify-center bg-[#9747FF66] 
            py-2 px-2 lg:px-3 rounded-sm mr-4 lg:ml-1"
              >
                <p className="text-sm lg:text-lg">{t("choose_file")}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {error && <p className="text-sm text-[#F04438] mt-2 -mb-1">{error}</p>}
    </div>
  );
};

export default InnerFile;
