import { Props } from "./types";
import XIcon from "@/components/icons/XIcon";
import useDarkModalLayout from "./useDarkModalLayout";
import { Button } from "../Button";
import { UserShortDescription } from "../UserShortDescription";

const DarkModalLayout: React.FC<Props> = ({
  title,
  children,
  btnText,
  submitFn,
  isPending,
  needScroll = true,
  type,
}) => {
  const { user, router } = useDarkModalLayout();
  return (
    <div
      className={`${needScroll ? "lg:bottom-24" : "lg:bottom-auto"}
        lg:left-1/2 lg:-translate-x-1/2 lg:min-w-[60rem] lg:top-24 bottom-0 
        absolute top-0 left-0 w-full lg:w-auto lg:h-auto bg-darkerBlue overflow-auto pb-8`}
    >
      <div
        className="top-0 left-0 w-full bg-darkerBlue z-50 sticky h-[5.75rem] flex items-center justify-between px-[2.1875rem]
       border-b border-b-[#EFEFEF33]"
      >
        <div className="w-4"></div>
        <h1 className="font-medium text-xl translate-y-1">{title}</h1>
        <button onClick={() => router.back()} className="translate-y-1">
          <XIcon />
        </button>
      </div>
      <div className="mt-9 px-[2.1875rem]">
        <UserShortDescription avatar={user?.avatar} name={user?.name} />
      </div>
      <form
        onSubmit={submitFn}
        className="flex flex-col gap-4 px-[2.1875rem] mt-8"
      >
        {children}
        {type !== "view" && (
          <div className="flex flex-col mt-7">
            <Button
              disabled={isPending}
              size="medium"
              color="red"
              type="submit"
            >
              {btnText}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default DarkModalLayout;
