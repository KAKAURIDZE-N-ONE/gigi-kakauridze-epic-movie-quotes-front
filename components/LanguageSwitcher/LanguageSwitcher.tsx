import LanguageArrow from "@/components/icons/LanguageArrow";
import useLanguageSwitcher from "./useLanguageSwitcher";
import { Props } from "./types";

const LanguageSwitcher: React.FC<Props> = ({ size }) => {
  const { isActive, setIsActive, locale, locales, asPath, dropDownRef } =
    useLanguageSwitcher();

  const handleLanguageChange = (lng: string) => {
    localStorage.setItem("language", lng);
    window.location.href = `/${lng}${asPath}`;
  };

  return (
    <div
      ref={dropDownRef}
      className={`${size === "small" ? "w-10" : "w-24"}
        text-white h-[2.375rem] flex 
    items-center justify-center gap-2 cursor-pointer
    relative`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <h4 className=" select-none text-sm lg:text-base">
        {locale ? locale.at(0)?.toUpperCase() + locale.slice(1) : "En"}
      </h4>
      <div
        className={`${
          isActive ? "rotate-180" : "rotate-0"
        } transition-all duration-300`}
      >
        <LanguageArrow className="w-4 h-4" />
      </div>
      {isActive && (
        <div
          className={`${size === "small" ? "-bottom-6" : "-bottom-7 "}
        absolute left-1/2 -translate-x-1/2 `}
        >
          {locales?.map((lng) => (
            <button
              className="text-white opacityAnime text-sm lg:text-base"
              key={lng}
              onClick={() => handleLanguageChange(lng)}
            >
              {lng !== locale && lng && lng.at(0)?.toUpperCase() + lng.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
