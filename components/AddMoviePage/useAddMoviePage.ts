import { CATEGORIES } from "@/config/queryKeys";
import { getCategories } from "@/services/apiCategory";
import { FormFieldsAddMovie } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function useAddMoviePage() {
  const { data: categories } = useQuery({
    queryKey: [CATEGORIES],
    queryFn: getCategories,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<FormFieldsAddMovie>({
    defaultValues: {
      categories: [],
    },
  });

  const selectedCategories = useWatch({
    control,
    name: "categories",
    defaultValue: [],
  });

  useEffect(() => {
    if (categories && categories.length > 0) {
      setValue(
        "categories",
        [{ id: categories[0].id, name: categories[0].name }],
        {
          shouldValidate: true,
        }
      );
    }
  }, [categories, setValue]);

  const onSubmit = async (data: FormFieldsAddMovie) => {
    console.log(data);
  };

  return {
    categories,
    register,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    selectedCategories,
  };
}
