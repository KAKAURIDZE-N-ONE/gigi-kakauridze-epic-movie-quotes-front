import { useAddMoviePage } from "@/components/AddMoviePage";
import { DarkModalLayout } from "@/components/DarkModalLayout";
import { InnerSelect } from "@/components/InnerSelect";
import { InnerInput } from "@/components/InnerInput";
import { Modal } from "@/components/Modal";
import React from "react";
import { InnerTextarea } from "@/components/InnerTextarea";
import { InnerFile } from "@/components/InnerFile";

const index: React.FC = () => {
  const {
    categories,
    register,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    selectedCategories,
  } = useAddMoviePage();

  return (
    <Modal>
      <DarkModalLayout
        submitFn={handleSubmit(onSubmit)}
        btnText="Add movie"
        xBtnUrl={`/movies`}
        title="Add Movie"
      >
        <InnerInput
          error={errors.nameEn?.message}
          {...register("nameEn", {
            required: "required",
          })}
          lang="Eng"
        >
          Movie name
        </InnerInput>
        <InnerInput
          error={errors.nameKa?.message}
          {...register("nameKa", {
            required: "required",
          })}
          lang="ქარ"
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
          {...register("year", {
            required: "required",
          })}
        >
          წელი/Year
        </InnerInput>
        <InnerInput
          error={errors.directorEn?.message}
          {...register("directorEn", {
            required: "required",
          })}
          lang="Eng"
        >
          Director
        </InnerInput>
        <InnerInput
          error={errors.directorKa?.message}
          {...register("directorKa", {
            required: "required",
          })}
          lang="ქარ"
        >
          რეჟისორი
        </InnerInput>
        <InnerTextarea
          error={errors.descriptionEn?.message}
          {...register("descriptionEn", {
            required: "required",
          })}
          lang="Eng"
        >
          Movie Description
        </InnerTextarea>
        <InnerTextarea
          error={errors.descriptionKa?.message}
          {...register("descriptionKa", {
            required: "required",
          })}
          lang="ქარ"
        >
          ფილმის აღწერა
        </InnerTextarea>
        {/* 

        {/* <InnerFile />  */}
      </DarkModalLayout>
    </Modal>
  );
};

export default index;
