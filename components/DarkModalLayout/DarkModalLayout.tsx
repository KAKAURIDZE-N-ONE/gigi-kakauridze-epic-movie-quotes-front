import { Props } from "./types";
import XIcon from "@/components/icons/XIcon";
import useDarkModalLayout from "./useDarkModalLayout";
import { Button } from "../Button";
import { UserShortDescription } from "../UserShortDescription";
import Trash from "../icons/Trash";
import Pencil from "../icons/Pencil";
import { updateActiveQuoteModal } from "@/store/slices/modalSlice";

const DarkModalLayout: React.FC<Props> = ({
  title,
  children,
  btnText,
  submitFn,
  isPending,
  type,
  trashFn,
  xBtnFn,
}) => {
  const { user, dispatch } = useDarkModalLayout();
  return (
    <div
      className={` lg:max-h-[80vh]
        lg:left-1/2 lg:-translate-x-1/2 lg:min-w-[60rem] lg:top-24 bottom-0 lg:bottom-auto
        absolute lg:block top-0 left-0 w-full lg:w-auto lg:h-auto bg-darkerBlue overflow-auto pb-8`}
    >
      <div
        className="top-0 left-0 w-full bg-darkerBlue z-50 sticky h-[5.75rem] flex items-center justify-between px-[2.1875rem]
        border-b border-b-[#EFEFEF33]"
      >
        <div className="w-4 translate-y-1 cursor-pointer">
          <div className="flex items-center gap-4">
            {type === "view" && (
              <>
                <div
                  onClick={() => dispatch(updateActiveQuoteModal("edit"))}
                  className="cursor-pointer"
                >
                  <Pencil />
                </div>
                <div className="h-4 min-w-px bg-white2"></div>
              </>
            )}
            {(type === "edit" || type === "view") && (
              <div
                onClick={() => {
                  if (trashFn) {
                    trashFn();
                  }
                }}
              >
                <Trash />
              </div>
            )}
          </div>
        </div>
        <h1 className="font-medium text-xl translate-y-1">{title}</h1>
        <button
          onClick={() => {
            if (xBtnFn) xBtnFn();
          }}
          className="translate-y-1"
        >
          <XIcon />
        </button>
      </div>
      <div className="mt-9 px-[2.1875rem]">
        <UserShortDescription avatar={user?.avatar} name={user?.name} />
      </div>
      {type !== "view" && (
        <form
          onSubmit={submitFn}
          className="flex flex-col gap-8 px-[2.1875rem] mt-8"
        >
          {children}

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
        </form>
      )}
      {type === "view" && (
        <div className="flex flex-col gap-4 px-[2.1875rem] mt-8">
          {children}
        </div>
      )}
    </div>
  );
};

export default DarkModalLayout;
