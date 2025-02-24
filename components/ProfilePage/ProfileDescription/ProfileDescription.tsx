import React from "react";
import { InputUnderline } from "@/components/ProfilePage";
import { Props } from "./types";
import useProfileDescription from "./useProfileDescription";

const ProfileDescription: React.FC<Props> = ({ setActiveEdit }) => {
  const { t, user } = useProfileDescription();
  return (
    <div className="flex flex-col gap-7 text-white px-[1.7rem]">
      <InputUnderline
        editClickFn={() => setActiveEdit("username")}
        editable={true}
        value={user?.name}
      >
        {t("username")}
      </InputUnderline>
      <InputUnderline value={user?.email} editable={false}>
        {t("email")}
      </InputUnderline>
      {!user?.google_id && (
        <InputUnderline
          editClickFn={() => setActiveEdit("password")}
          value={"************"}
          editable={true}
        >
          {t("password")}
        </InputUnderline>
      )}
    </div>
  );
};

export default ProfileDescription;
