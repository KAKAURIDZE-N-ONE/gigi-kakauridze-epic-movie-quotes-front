import { useWatch } from "react-hook-form";
import { HookProps } from "./types";
import { useEffect, useState } from "react";

export default function useInnerFile({ control }: HookProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const selectedImage = useWatch({ control, name: "image" });

  useEffect(() => {
    const fileExist = selectedImage?.length > 0;
    if (fileExist) {
      setImagePreview(URL.createObjectURL(selectedImage[0]));
    }
  }, [selectedImage]);

  return { imagePreview };
}
