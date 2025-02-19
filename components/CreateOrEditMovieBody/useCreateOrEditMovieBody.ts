import { CATEGORIES, MOVIE } from "@/config/queryKeys";
import useCreateMovie from "@/hooks/useCreateMovie";
import useUpdateMovie from "@/hooks/useUpdateMovie";
import { getCategories, getMovie } from "@/services/apiMovie";
import { FormFieldsAddMovie } from "@/types/movie";
import { Category, MovieResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function useCreateOrEditMovieBody() {
  const router = useRouter();

  const isEditBody = router.pathname.endsWith("/edit");
  const { id: editMovieId } = router.query;

  const { data: categories } = useQuery({
    queryKey: [CATEGORIES],
    queryFn: getCategories,
  });

  const { data: movieData } = useQuery<MovieResponse>({
    queryFn: () => getMovie(Number(editMovieId)),
    queryKey: [MOVIE, editMovieId],
    enabled: !!editMovieId,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
  } = useForm<FormFieldsAddMovie>({
    defaultValues: {
      categories: [],
    },
  });

  const selectedCategories = useWatch({
    control,
    name: "categories",
  });

  useEffect(() => {
    if (!movieData) return;

    const categories = movieData?.categories?.map((el) => {
      return { id: el?.id, name: { en: el?.name?.en, ka: el?.name?.ka } };
    });

    reset({
      categories,
      nameEn: movieData.name.en,
      nameKa: movieData.name.ka,
      directorEn: movieData.director.en,
      directorKa: movieData.director.ka,
      descriptionEn: movieData.description.en,
      descriptionKa: movieData.description.ka,
      year: movieData.year,
    });
  }, [movieData, isEditBody, reset]);

  const { mutate: createMovie, isPending: createMovieIsPending } =
    useCreateMovie();

  const { mutate: updateMovie, isPending: updateMovieIsPending } =
    useUpdateMovie();

  useEffect(() => {
    if (categories && categories.length > 0 && !isEditBody) {
      setValue(
        "categories",
        [{ id: categories[0].id, name: categories[0].name }],
        {
          shouldValidate: true,
        }
      );
    }
  }, [categories, setValue]);

  const createMovieOnSubmit = async (data: FormFieldsAddMovie) => {
    const name = { en: data.nameEn, ka: data.nameKa };
    const director = { en: data.descriptionEn, ka: data.directorKa };
    const description = { en: data.descriptionEn, ka: data.descriptionKa };
    const categoriesIds = data.categories.map(
      (category: Category) => category.id
    );
    const image = data.image[0];

    createMovie({
      name,
      director,
      description,
      categories: categoriesIds,
      image,
      year: data.year,
    });
  };

  const editMovieOnSubmit = async (data: FormFieldsAddMovie) => {
    const name = { en: data.nameEn, ka: data.nameKa };
    const director = { en: data.descriptionEn, ka: data.directorKa };
    const description = { en: data.descriptionEn, ka: data.descriptionKa };
    const categoriesIds = data.categories.map(
      (category: Category) => category.id
    );
    const image = data.image[0];

    updateMovie({
      movieId: Number(editMovieId),
      name,
      director,
      description,
      categories: categoriesIds,
      image,
      year: data.year,
    });
  };

  return {
    categories,
    register,
    handleSubmit,
    errors,
    createMovieOnSubmit,
    editMovieOnSubmit,
    setValue,
    selectedCategories,
    control,
    createMovieIsPending,
    updateMovieIsPending,
    router,
    isEditBody,
    editMovieId,
    movieImage: movieData?.image,
  };
}
