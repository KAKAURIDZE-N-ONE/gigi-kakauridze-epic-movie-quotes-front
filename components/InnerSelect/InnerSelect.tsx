import { Props } from "./types";
import useInnerSelect from "./useInnerSelect";
import SmallXIcon from "@/components/icons/SmallXIcon";

const InnerSelect: React.FC<Props> = ({
  options,
  children,
  selectName,
  setValue,
  error,
  selectedOptions,
  ...rest
}) => {
  const {
    language,
    optionsRef,
    optionsIsOn,
    setOptionsIsOn,
    handleSelect,
    handleRemoveOption,
  } = useInnerSelect({
    selectName,
    setValue,
    selectedOptions,
  });

  return (
    <div
      ref={optionsRef}
      onClick={() => setOptionsIsOn((isOn) => !isOn)}
      className="relative cursor-pointer"
    >
      <div className="bg-darkerBlue border border-gray w-full rounded-[0.3rem] py-2 pl-4 pr-4 min-h-12 flex flex-wrap gap-2 items-center">
        {selectedOptions.length === 0 ? (
          <p className="text-gray-400">{children}</p>
        ) : (
          selectedOptions.map((option) => {
            return (
              <div
                key={option.id}
                className=" flex items-center gap-1 bg-gray px-2 py-1 rounded-md"
              >
                <p className="text-sm">{option.name[language]}</p>
                <div
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveOption(option);
                  }}
                >
                  <SmallXIcon />
                </div>
              </div>
            );
          })
        )}
      </div>

      {optionsIsOn && (
        <div className="absolute bg-darkerBlue border border-gray mt-1 w-full rounded-md shadow-md max-h-40 overflow-auto z-20">
          {options?.map((option) => {
            const isSelected = selectedOptions.some(
              (selectedOption) =>
                Number(selectedOption.id) === Number(option.id)
            );

            return (
              <div
                key={option.id}
                className={`${
                  !isSelected ? "hover:bg-darkerBlue" : ""
                } transition-all duration-200 bg-darkBlue flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  isSelected ? "bg-darkerBlue" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect({
                    id: option.id,
                    name: option.name,
                  });
                }}
              >
                <p className="text-sm">{option.name[language]}</p>
              </div>
            );
          })}
        </div>
      )}
      {error && (
        <p className="text-sm text-[#F04438] absolute -bottom-6">{error}</p>
      )}

      <input type="hidden" name={selectName} {...rest} />
    </div>
  );
};

export default InnerSelect;
