import React from "react";
import useMobileProfilePage from "./useMobileProfilePage";
import {
  ConfirmModalBody,
  EditMobileLayout,
  EditPasswordBody,
  ProfileDescription,
  ProfileImage,
} from "@/components/ProfilePage";
import ArrowLeftBig from "@/components/icons/ArrowLeftBig";
import { EditUsernameBody } from "@/components/ProfilePage";

const MobileProfilePage: React.FC = () => {
  const {
    router,
    activeEdit,
    setActiveEdit,
    setFormDataUsername,
    handleConfirmUsername,
    handleConfirmPassword,
    openedModal,
    setFormDataPassword,
    t,
    apiUsernameError,
  } = useMobileProfilePage();

  return (
    <>
      {openedModal === "makeChangesUsername" && (
        <div className="flex justify-center mt-32">
          <ConfirmModalBody onConfirm={handleConfirmUsername}>
            {t("sure_make_changes")}
          </ConfirmModalBody>
        </div>
      )}
      {openedModal === "makeChangesPassword" && (
        <div className="flex justify-center mt-32">
          <ConfirmModalBody onConfirm={handleConfirmPassword}>
            {t("sure_make_changes")}
          </ConfirmModalBody>
        </div>
      )}
      <div
        className={`bg-darkerBlue  ${
          openedModal !== "makeChangesUsername" &&
          openedModal !== "makeChangesPassword"
            ? "pt-[5.375rem]"
            : ""
        }`}
      >
        {openedModal === null && (
          <div className="h-[4rem] px-8 flex items-center">
            <div onClick={() => router.push("/news-feed")}>
              <ArrowLeftBig />
            </div>
          </div>
        )}
        <div className="rounded-t-xl overflow-hidden">
          <div className={`${activeEdit === null ? "pb-20" : ""} bg-darkBlue`}>
            {activeEdit === null && (
              <>
                <ProfileImage />
                <div className="mt-10">
                  <ProfileDescription setActiveEdit={setActiveEdit} />
                </div>
              </>
            )}
            {activeEdit === "username" && openedModal === null && (
              <EditMobileLayout
                handleConfirm={handleConfirmUsername}
                setActiveEdit={setActiveEdit}
              >
                <EditUsernameBody
                  serverError={apiUsernameError?.response?.data?.errors?.name[0]?.replace(
                    "name",
                    t("username")
                  )}
                  setFormDataUsername={setFormDataUsername}
                />
              </EditMobileLayout>
            )}
            {activeEdit === "password" && openedModal === null && (
              <EditMobileLayout
                activeEdit={activeEdit}
                handleConfirm={handleConfirmPassword}
                setActiveEdit={setActiveEdit}
              >
                <EditPasswordBody setFormDataPassword={setFormDataPassword} />
              </EditMobileLayout>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileProfilePage;
