import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HookProps } from "./types";
import { Category } from "@/types/respones";

export default function useInnerSelect({
  setValue,
  selectName,
  selectedOptions,
}: HookProps) {
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const [optionsIsOn, setOptionsIsOn] = useState<boolean>(false);

  const { i18n } = useTranslation();
  const { language } = i18n;

  useOutsideClick(optionsRef as React.RefObject<HTMLElement>, () =>
    setOptionsIsOn(false)
  );

  function handleSelect(option: Category) {
    const isAlreadySelected = selectedOptions.some(
      (selectedOption) => Number(selectedOption.id) === Number(option.id)
    );

    if (!isAlreadySelected) {
      const newSelectedOptions = [...selectedOptions, option];
      setValue(selectName, newSelectedOptions, { shouldValidate: true });
    } else {
      const newSelectedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption.id !== option.id
      );
      setValue(selectName, newSelectedOptions, { shouldValidate: true });
    }
  }

  const handleRemoveOption = (option: Category) => {
    const newSelectedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption.id !== option.id
    );
    setValue(selectName, newSelectedOptions, { shouldValidate: true });
  };

  return {
    optionsRef,
    optionsIsOn,
    setOptionsIsOn,
    language,
    handleSelect,
    handleRemoveOption,
  };
}
