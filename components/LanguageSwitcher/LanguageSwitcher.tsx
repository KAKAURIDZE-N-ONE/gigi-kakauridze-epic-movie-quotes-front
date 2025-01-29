import LanguageArrow from "@/svgs/LanguageArrow";
import useLanguageSwitcher from "./useLanguageSwitcher";

const LanguageSwitcher = () => {
  const { isActive, setIsActive, locale, locales, asPath, dropDownRef } =
    useLanguageSwitcher();

  return (
    <div
      ref={dropDownRef}
      className="text-white w-24 h-[2.375rem] flex 
    items-center justify-center gap-2 cursor-pointer
    relative"
      onClick={() => setIsActive((isActive) => !isActive)}
    >
      <h4 className="text-base select-none">
        {locale ? locale.at(0)?.toUpperCase() + locale.slice(1) : "En"}
      </h4>
      <div
        className={`${
          isActive ? "rotate-180" : "rotate-0"
        } transition-all duration-300`}
      >
        <LanguageArrow />
      </div>
      {isActive && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-7 ">
          {locales?.map((lng) => (
            <button
              className="text-white opacityAnime"
              key={lng}
              onClick={() => (window.location.href = `/${lng}${asPath}`)}
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

// {locales?.map((lng) => (
//   <button
//     key={lng}
//     onClick={() => (window.location.href = `/${lng}${asPath}`)}
//   >
//     {lng === locale ? "Current Language" : lng}{" "}
//   </button>
// ))}
