import React, { FormEvent } from "react";
import useCreatePostBody from "./useCreatePostBody";
import { DarkModalLayout } from "@/components/DarkModalLayout";
import { InnerTextarea } from "@/components/InnerTextarea";
import {
  ENGLISH_LANGUAGE_PATTERN_VALUE,
  GEORGIAN_LANGUAGE_PATTERN_VALUE,
} from "@/config/regex";
import { Props } from "./types";
import { InnerFile } from "@/components/InnerFile";
import { Control } from "react-hook-form";
import { FormFieldsAddMovie, FormFieldsAddQuote } from "@/types/movie";
import { SelectMovies } from "@/components/NewsFeedPage";

const CreatePostBody: React.FC<Props> = ({ turnOfFn }) => {
  const {
    errors,
    register,
    onSubmit,
    control,
    handleSubmit,
    choosedMovieId,
    setChoosedMovieId,
    createPostIsPending,
    movies,
    t,
    customSelectError,
    setCustomSelectError,
    setIsSubmitted,
    isSubmitted,
  } = useCreatePostBody();

  return (
    <>
      {createPostIsPending && <div className="loader"></div>}
      <DarkModalLayout
        isPending={createPostIsPending}
        submitFn={(e: FormEvent) => {
          e.preventDefault();
          if (!choosedMovieId) setCustomSelectError(true);
          handleSubmit(onSubmit)();
          setIsSubmitted(true);
        }}
        title={t("new_quote")}
        xBtnFn={turnOfFn}
        btnText={t("post")}
      >
        <div className="mt-2">
          <InnerTextarea
            error={errors.quote?.en?.message}
            register={register("quote.en", {
              required: t("required"),
              pattern: {
                value: ENGLISH_LANGUAGE_PATTERN_VALUE,
                message: t("only_english"),
              },
            })}
            lang="en"
          >
            {t("create_new_quote")}
          </InnerTextarea>
        </div>
        <InnerTextarea
          error={errors.quote?.ka?.message}
          register={register("quote.ka", {
            required: t("required"),
            pattern: {
              value: GEORGIAN_LANGUAGE_PATTERN_VALUE,
              message: t("only_georgian"),
            },
          })}
          lang="ka"
        >
          {t("create_new_quote")}
        </InnerTextarea>
        <InnerFile
          control={control as Control<FormFieldsAddMovie | FormFieldsAddQuote>}
          error={errors.image?.message}
          register={register("image", {
            required: t("required"),
          })}
        />
        <SelectMovies
          isSubmitted={isSubmitted}
          error={customSelectError}
          choosedMovieId={choosedMovieId}
          setChoosedMovieId={setChoosedMovieId}
          setCustomSelectError={setCustomSelectError}
          movies={movies}
        />
      </DarkModalLayout>
    </>
  );
};

export default CreatePostBody;
