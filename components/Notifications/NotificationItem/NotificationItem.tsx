import { Props } from "./types";
import useNotificationItem from "./useNotificationItem";
import Quote from "@/components/icons/Quote";
import RedHearth from "@/components/icons/RedHearth";
import timeFormatter from "@/utils/timeFormatter";

const NotificationItem: React.FC<Props> = ({ notification }) => {
  const { t, moveToViewQuoteModal, markNotificationAsRead } =
    useNotificationItem();

  return (
    <div
      onClick={() => {
        moveToViewQuoteModal(
          notification.data.movie_id,
          notification.data.quote_id
        );
        markNotificationAsRead(notification.id);
      }}
      key={notification.id}
    >
      <div
        className="flex items-center justify-between border border-[#6C757D80] rounded-[0.25rem]
    lg:py-[1.2rem] py-4 px-4 lg:px-7 cursor-pointer overflow-hidden "
      >
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div
              style={{
                backgroundImage: `url(${
                  "commenter_avatar" in notification.data
                    ? notification.data.commenter_avatar
                    : "liker_avatar" in notification.data
                    ? notification.data.liker_avatar
                    : ""
                })`,
              }}
              className={`
            ${notification.read_at === null ? "" : "translate-y-1"} 
            ${notification.read_at ? "" : "border-green"}
            border-2 lg:border w-[3.75rem] min-w-[3.75rem] h-[3.75rem] 
            lg:w-20 lg:h-20 rounded-full bg-cover bg-center bg-no-repeat `}
            ></div>
            <p
              className={`${
                notification.read_at === null
                  ? "text-green"
                  : "text-black select-none"
              } lg:hidden`}
            >
              {t("new")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 lg:gap-2">
              <p className="text-white text-xl">
                {"commenter_name" in notification.data
                  ? notification.data.commenter_name
                  : "liker_name" in notification.data &&
                    notification.data.liker_name}
              </p>
              <div className="flex items-center gap-3">
                {"comment_id" in notification.data ? (
                  <>
                    <Quote />
                    <p className="text-white2 text-base lg:text-xl text-nowrap">
                      {t("comment_text")}
                    </p>
                  </>
                ) : (
                  <>
                    <RedHearth />
                    <p className="text-white2 text-base lg:text-xl text-nowrap">
                      {t("like_text")}
                    </p>
                  </>
                )}
              </div>
            </div>
            <p className="text-white1 lg:hidden">
              {timeFormatter(notification.created_at)}
            </p>
          </div>
        </div>
        <div className="hidden flex-col items-end gap-2 lg:flex">
          <p className="text-xl text-white1">
            {timeFormatter(notification.created_at)}
          </p>
          {notification.read_at === null && (
            <p className="text-green text-xl">{t("new")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
