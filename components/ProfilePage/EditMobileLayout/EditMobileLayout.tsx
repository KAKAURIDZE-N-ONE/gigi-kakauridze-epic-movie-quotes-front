import { Props } from "./types";
import { Button } from "@/components/Button";

const EditMobileLayout: React.FC<Props> = ({
  setActiveEdit,
  activeEdit,
  children,
}) => {
  return (
    <div className={`w-full`}>
      <div
        className={`${
          activeEdit === "password" ? "h-[20rem]" : "h-[14.6875rem]"
        } flex items-center w-full flex-col justify-center `}
      >
        {children}
      </div>
      <div className="flex items-center justify-between  bg-darkerBlue px-[2.1875rem] py-8">
        <button className="text-white2" onClick={() => setActiveEdit(null)}>
          Cancel
        </button>
        <Button
          size="smaller"
          clickFn={() => {}}
          color="red"
          type="submit"
          form="form"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default EditMobileLayout;
