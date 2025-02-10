import React, { use } from "react";
import { Props } from "./types";
import { InnerNavigation } from "../InnerNavigation";
import { useAuthentication } from "@/hooks/useAuthentication";

const DesktopInnerLayout: React.FC<Props> = ({ children }) => {
  const { user } = useAuthentication();

  return (
    <div className="text-white flex">
      <div className="h-[100dvh] min-w-96 text-nowrap">
        <div className="sticky left-0 top-[6.6rem] px-[4.375rem] mt-5">
          {user && <InnerNavigation user={user} />}
        </div>
      </div>
      <div className="pt-5 pb-14 w-full">{children}</div>
    </div>
  );
};

export default DesktopInnerLayout;
