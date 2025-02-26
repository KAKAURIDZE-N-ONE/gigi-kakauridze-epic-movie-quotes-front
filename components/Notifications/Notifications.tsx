import Bell from "../icons/Bell";
import Loader from "../Loader";
import { NotificationItem } from "./NotificationItem";
import useNotifications from "./useNotifications";

const Notifications: React.FC = () => {
  const {
    t,
    notificationsRef,
    notificationsModalIsOpen,
    setNotificationsModalIsOpen,
    notifications,
    markAllNotificationsAsRead,
    markAllNotificationsAsReadIsPending,
    unreadNotificationsLength,
  } = useNotifications();

  return (
    <>
      {markAllNotificationsAsReadIsPending && <Loader />}
      <div
        ref={notificationsRef}
        className="inline-block relative cursor-pointer lg:mr-9 "
      >
        <div onClick={() => setNotificationsModalIsOpen((isOpen) => !isOpen)}>
          {unreadNotificationsLength > 0 && (
            <div
              className="absolute -top-2 -right-2 w-5 h-5 bg-red4 
          flex items-center justify-center rounded-full "
            >
              <p className="font-medium text-white select-none relative">
                {unreadNotificationsLength}
              </p>
            </div>
          )}
          <div className="relative -z-10">
            {notificationsModalIsOpen && (
              <div className="triangle-up absolute -left-3 -bottom-[3.4rem]"></div>
            )}
            <Bell />
          </div>
        </div>
        {notificationsModalIsOpen && (
          <div
            className="fixed lg:absolute right-0 w-full lg:-right-[10.3rem] top-[5.375rem] 
        lg:top-[3.46rem] z-[70] lg:w-[50rem] xl:w-[60rem] bg-black rounded-xl lg:h-auto 
        pt-11 pb-12 cursor-default px-4"
          >
            <div className="flex items-center justify-between px-5 gap-6 text-center">
              <h1 className="text-white font-medium text-xl lg:text-[2rem]">
                {t("notifications")}
              </h1>
              <p
                onClick={() => markAllNotificationsAsRead()}
                className="text-white text-sm lg:text-xl underline cursor-pointer hover:opacity-70 transition-all duration-200"
              >
                {t("mark_read")}
              </p>
            </div>
            <ul className="flex flex-col gap-4 mt-6 h-[calc(100svh-14.375rem)]  lg:max-h-[30rem]  overflow-auto px-5">
              {notifications?.map((notification) => {
                return (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Notifications;
