import React from "react";
import Loader from "@/components/Loader";
import useCreateOrEditMovieBody from "./useCreateOrEditMovieBody";
import { Modal } from "@/components/Modal";
import Head from "next/head";
import { DarkModalLayout } from "@/components/DarkModalLayout";
import { InnerInput } from "@/components/InnerInput";
import {
  ENGLISH_LANGUAGE_PATTERN_VALUE,
  GEORGIAN_LANGUAGE_PATTERN_VALUE,
} from "@/config/regex";
import { InnerSelect } from "@/components/InnerSelect";
import { InnerTextarea } from "@/components/InnerTextarea";
import { InnerFile } from "@/components/InnerFile";
import { Control } from "react-hook-form";
import { FormFieldsAddMovie, FormFieldsAddQuote } from "@/types/movie";
import { Props } from "./types";

const CreateOrEditMovieBody: React.FC<Props> = ({ turnOfFn, type }) => {
  const {
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
    isEditBody,
    movieImage,
    t,
  } = useCreateOrEditMovieBody({ type });

  return (
    <div>
      {(createMovieIsPending || updateMovieIsPending) && <Loader />}
      <Modal turnOfFn={turnOfFn}>
        <Head>
          <title>{isEditBody ? t("edit_movie") : t("add_movie")}</title>
        </Head>
        <DarkModalLayout
          submitFn={handleSubmit(
            isEditBody ? editMovieOnSubmit : createMovieOnSubmit
          )}
          xBtnFn={turnOfFn}
          btnText={isEditBody ? t("save_changes") : t("add_movie")}
          isPending={createMovieIsPending || updateMovieIsPending}
          title={isEditBody ? t("edit_movie") : t("add_movie")}
        >
          <InnerInput
            isEditInput={isEditBody}
            error={errors.name?.en?.message}
            register={register("name.en", {
              required: t("required"),
              pattern: {
                value: ENGLISH_LANGUAGE_PATTERN_VALUE,
                message: t("only_english"),
              },
            })}
            lang="en"
          >
            Movie name
          </InnerInput>
          <InnerInput
            error={errors.name?.ka?.message}
            register={register("name.ka", {
              required: t("required"),
              pattern: {
                value: GEORGIAN_LANGUAGE_PATTERN_VALUE,
                message: t("only_georgian"),
              },
            })}
            lang="ka"
          >
            ფილმის სახელი
          </InnerInput>
          <InnerSelect
            selectName="categories"
            options={categories}
            selectedOptions={selectedCategories}
            setValue={setValue}
            error={errors.categories?.message}
            {...register("categories", {
              validate: (value) => value.length > 0 || t("at_least_one"),
            })}
          >
            Select categories
          </InnerSelect>
          <InnerInput
            error={errors.year?.message}
            register={register("year", {
              required: t("required"),
              valueAsNumber: true,
              min: {
                value: 1895,
                message: t("after_1995"),
              },
              max: {
                value: new Date().getFullYear(),
                message: t("not_in_future"),
              },
              validate: (value) => !isNaN(value) || t("only_number"),
            })}
          >
            წელი/Year
          </InnerInput>
          <InnerInput
            error={errors.director?.en?.message}
            register={register("director.en", {
              required: t("required"),
              pattern: {
                value: ENGLISH_LANGUAGE_PATTERN_VALUE,
                message: t("only_english"),
              },
            })}
            lang="en"
          >
            Director
          </InnerInput>
          <InnerInput
            error={errors.director?.ka?.message}
            register={register("director.ka", {
              required: t("required"),
              pattern: {
                value: GEORGIAN_LANGUAGE_PATTERN_VALUE,
                message: t("only_georgian"),
              },
            })}
            lang="ka"
          >
            რეჟისორი
          </InnerInput>
          <InnerTextarea
            error={errors.description?.en?.message}
            register={register("description.en", {
              required: t("required"),
              pattern: {
                value: ENGLISH_LANGUAGE_PATTERN_VALUE,
                message: t("only_english"),
              },
            })}
            lang="en"
          >
            Movie Description
          </InnerTextarea>
          <InnerTextarea
            error={errors.description?.ka?.message}
            register={register("description.ka", {
              required: t("required"),
              pattern: {
                value: GEORGIAN_LANGUAGE_PATTERN_VALUE,
                message: t("only_georgian"),
              },
            })}
            lang="ka"
          >
            ფილმის აღწერა
          </InnerTextarea>
          <InnerFile
            savedImage={movieImage}
            control={
              control as Control<FormFieldsAddMovie | FormFieldsAddQuote>
            }
            error={errors.image?.message}
            register={register(
              "image",
              isEditBody ? {} : { required: t("required") }
            )}
          />
        </DarkModalLayout>
      </Modal>
    </div>
  );
};

export default CreateOrEditMovieBody;
