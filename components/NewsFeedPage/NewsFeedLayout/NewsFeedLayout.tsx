import PencilSquare from "@/components/icons/PencilSquare";
import useNewsFeedLayout from "./useNewsFeedLayout";
import { Post } from "../Post";
import SmallSearch from "@/components/icons/SmallSearch";
import XIcon from "@/components/icons/XIcon";
import { updateActiveQuoteModal } from "@/store/slices/modalSlice";
import Ghost from "@/components/icons/Ghost";
import Eclipse from "@/components/icons/Eclipse";
import { updateSearchIsOpen } from "@/store/slices/newsFeedSlice";
import MobileSearchModal from "../MobileSearchModal/MobileSearchModal";

const NewsFeedLayout: React.FC = () => {
  const {
    dispatch,
    posts,
    searchIsOpen,
    searchValue,
    setSearchValue,
    searchRef,
    t,
    language,
    isPending,
    isMobile,
    page,
  } = useNewsFeedLayout();

  return (
    <>
      {searchIsOpen && isMobile && (
        <MobileSearchModal
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
      <div className="lg:pt-[5.375rem] mt-[7.5rem] lg:mt-2  lg:max-w-[58rem] lg:ml-0 2xl:ml-[7.5rem] lg:pr-[4.375rem]">
        <div className="flex items-center justify-between gap-5">
          <div
            onClick={() => dispatch(updateActiveQuoteModal("createPost"))}
            className={`${!searchIsOpen ? "lg:w-full" : ""}
          cursor-pointer px-[2.1875rem] lg:py-3 lg:px-3  lg:bg-normalBlue lg:hover:bg-[#9696964c] 
          rounded-[0.625rem] transition-colors duration-200 `}
          >
            <div className="inline-block lg:block ">
              <div className="group flex items-center gap-3 ">
                <PencilSquare />
                <h2 className="text-nowrap group-hover:opacity-70 transition-all duration-200">
                  {t("new_quote")}
                </h2>
              </div>
            </div>
          </div>
          {searchIsOpen && !isMobile && (
            <div className="opacityAnime w-full relative">
              <label
                htmlFor="search"
                className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer"
              >
                <SmallSearch />
              </label>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(updateSearchIsOpen(false));
                  setSearchValue("");
                }}
                className="absolute z-20 top-1/2 -translate-y-1/2 right-0 p-1 rounded-full hover:bg-[#ffffff20] cursor-pointer transition-colors duration-200"
              >
                <XIcon />
              </div>
              <div className="left-0 w-full -bottom-2 border-b border-b-[#EFEFEF4D] absolute"></div>
              <div className="relative">
                {!searchValue && (
                  <>
                    <h3
                      className="absolute top-1/2 -translate-y-1/2 left-8 
                    text-white2 text-lg pointer-events-none select-none tracking-tight"
                    >
                      {language === "en" && (
                        <span>
                          Enter <span className="text-white font-bold">@</span>{" "}
                          to search movies, Enter{" "}
                          <span className="text-white font-bold">#</span> to
                          search quotes
                        </span>
                      )}
                      {language === "ka" && (
                        <span>
                          შეიყვანეთ{" "}
                          <span className="text-white font-bold">@</span>{" "}
                          ფილმებისთვის და{" "}
                          <span className="text-white font-bold">#</span>{" "}
                          ციტატებისთვის
                        </span>
                      )}
                    </h3>
                  </>
                )}

                <input
                  ref={searchRef}
                  id="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full bg-inherit py-[0.4rem] focus:outline-none
                  text-lg px-8"
                  type="text"
                />
              </div>
            </div>
          )}
          {!searchIsOpen && (
            <div
              onClick={() => {
                dispatch(updateSearchIsOpen(true));
              }}
              className="group hidden lg:flex items-center gap-3 cursor-pointer"
            >
              <SmallSearch />
              <p className="text-xl text-white2 group-hover:text-white text-nowrap select-none transition-all duration-200">
                {t("search")}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col mt-7 lg:mt-5 gap-8">
          {isPending &&
            page === 1 &&
            Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="loaderPost"></div>
            ))}
          {posts?.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
          {!isPending && posts.length === 0 && (
            <div className="flex flex-col gap-8 items-center justify-center mt-20">
              <Ghost />
              <Eclipse />
              <h1 className="text-white font-extrabold text-4xl px-10 text-center leading-[3rem]">
                {t("posts_not_found")}
              </h1>
            </div>
          )}
          {isPending &&
            Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="loaderPost"></div>
            ))}
        </div>
      </div>
    </>
  );
};

export default NewsFeedLayout;
