import React from "react";
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
    createQuoteIsPending,
    movies,
    t,
  } = useCreatePostBody();

  return (
    <DarkModalLayout
      isPending={createQuoteIsPending}
      submitFn={handleSubmit(onSubmit)}
      title={t("new_quote")}
      xBtnFn={turnOfFn}
      btnText={t("post")}
    >
      <div className="mt-2">
        <InnerTextarea
          error={errors.quote?.en?.message}
          register={register("quote.en", {
            required: "required",
            pattern: {
              value: ENGLISH_LANGUAGE_PATTERN_VALUE,
              message: "Only english letters and numbers are allowed",
            },
          })}
          lang="en"
        >
          Create new quote
        </InnerTextarea>
      </div>
      <InnerTextarea
        error={errors.quote?.ka?.message}
        register={register("quote.ka", {
          required: "required",
          pattern: {
            value: GEORGIAN_LANGUAGE_PATTERN_VALUE,
            message: "Only Georgian letters and numbers are allowed",
          },
        })}
        lang="ka"
      >
        ფილმის აღწერა
      </InnerTextarea>
      <InnerFile
        control={control as Control<FormFieldsAddMovie | FormFieldsAddQuote>}
        error={errors.image?.message}
        register={register("image", {
          required: "required",
        })}
      />
      <SelectMovies
        choosedMovieId={choosedMovieId}
        setChoosedMovieId={setChoosedMovieId}
        movies={movies}
      />
    </DarkModalLayout>
  );
};

export default CreatePostBody;
