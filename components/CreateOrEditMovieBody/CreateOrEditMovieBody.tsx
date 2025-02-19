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

const CreateOrEditMovieBody: React.FC = () => {
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
    router,
    isEditBody,
    editMovieId,
    movieImage,
  } = useCreateOrEditMovieBody();

  return (
    <div>
      {(createMovieIsPending || updateMovieIsPending) && <Loader />}
      <Modal
        turnOfFn={() =>
          router.push(isEditBody ? `/movies/${editMovieId}` : "/movies")
        }
      >
        <Head>
          <title>{isEditBody ? "Edit" : "Add"} Movie</title>
        </Head>
        <DarkModalLayout
          submitFn={handleSubmit(
            isEditBody ? editMovieOnSubmit : createMovieOnSubmit
          )}
          btnText="Add movie"
          xBtnUrl={isEditBody ? `/movies/${editMovieId}` : "/movies"}
          isPending={createMovieIsPending || updateMovieIsPending}
          title={`${isEditBody ? "Edit" : "Add"} Movie`}
        >
          <InnerInput
            isEditInput={isEditBody}
            error={errors.nameEn?.message}
            register={register("nameEn", {
              required: "required",
              pattern: {
                value: ENGLISH_LANGUAGE_PATTERN_VALUE,
                message: "Only English letters and numbers are allowed",
              },
            })}
            lang="en"
          >
            Movie name
          </InnerInput>
          <InnerInput
            error={errors.nameKa?.message}
            register={register("nameKa", {
              required: "required",
              pattern: {
                value: GEORGIAN_LANGUAGE_PATTERN_VALUE,
                message: "Only Georgian letters and numbers are allowed",
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
              validate: (value) =>
                value.length > 0 || "At least one category is required",
            })}
          >
            Select categories
          </InnerSelect>
          <InnerInput
            error={errors.year?.message}
            register={register("year", {
              required: "required",
              valueAsNumber: true,
              min: {
                value: 1900,
                message: "Year must be after 1900",
              },
              max: {
                value: new Date().getFullYear(),
                message: "Year cannot be in the future",
              },
              validate: (value) => !isNaN(value) || "Must be a number",
            })}
          >
            წელი/Year
          </InnerInput>
          <InnerInput
            error={errors.directorEn?.message}
            register={register("directorEn", {
              required: "required",
              pattern: {
                value: ENGLISH_LANGUAGE_PATTERN_VALUE,
                message: "Only English letters and numbers are allowed",
              },
            })}
            lang="en"
          >
            Director
          </InnerInput>
          <InnerInput
            error={errors.directorKa?.message}
            register={register("directorKa", {
              required: "required",
              pattern: {
                value: GEORGIAN_LANGUAGE_PATTERN_VALUE,
                message: "Only Georgian letters and numbers are allowed",
              },
            })}
            lang="ka"
          >
            რეჟისორი
          </InnerInput>
          <InnerTextarea
            error={errors.descriptionEn?.message}
            register={register("descriptionEn", {
              required: "required",
              pattern: {
                value: ENGLISH_LANGUAGE_PATTERN_VALUE,
                message: "Only Georgian letters and numbers are allowed",
              },
            })}
            lang="en"
          >
            Movie Description
          </InnerTextarea>
          <InnerTextarea
            error={errors.descriptionKa?.message}
            register={register("descriptionKa", {
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
            movieImage={movieImage}
            control={control}
            error={errors.image?.message}
            register={register(
              "image",
              isEditBody ? {} : { required: "required" }
            )}
          />
        </DarkModalLayout>
      </Modal>
    </div>
  );
};

export default CreateOrEditMovieBody;
