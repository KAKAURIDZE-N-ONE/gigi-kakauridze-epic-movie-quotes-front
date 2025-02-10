import React, { use } from "react";
import { InputUnderline } from "@/components/ProfilePage";
import { useAuthentication } from "@/hooks/useAuthentication";
import { Props } from "./types";

const ProfileDescription: React.FC<Props> = ({ setActiveEdit }) => {
  const { user } = useAuthentication();

  return (
    <div className="flex flex-col gap-7 text-white px-[1.7rem]">
      <InputUnderline
        editClickFn={() => setActiveEdit("username")}
        editable={true}
        value={user?.name}
        type="text"
      >
        Username
      </InputUnderline>
      <InputUnderline value={user?.email} editable={false} type="text">
        Email
      </InputUnderline>
      {!user?.google_id && (
        <InputUnderline
          editClickFn={() => setActiveEdit("password")}
          value={"************"}
          editable={true}
          type="password"
        >
          Password
        </InputUnderline>
      )}
    </div>
  );
};

export default ProfileDescription;
