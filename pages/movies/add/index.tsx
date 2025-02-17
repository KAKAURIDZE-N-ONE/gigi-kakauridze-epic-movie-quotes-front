import { useAddMoviePage } from "@/components/AddMoviePage";
import { DarkModalLayout } from "@/components/DarkModalLayout";
import { InnerSelect } from "@/components/InnerSelect";
import { InnerInput } from "@/components/InnerInput";
import { Modal } from "@/components/Modal";
import React from "react";
import { InnerTextarea } from "@/components/InnerTextarea";

const AddMoviePage: React.FC = () => {
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
          register={register("nameEn", {
            required: "required",
          })}
          lang="en"
        >
          Movie name
        </InnerInput>
        <InnerInput
          error={errors.nameKa?.message}
          register={register("nameKa", {
            required: "required",
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
          })}
        >
          წელი/Year
        </InnerInput>
        <InnerInput
          error={errors.directorEn?.message}
          register={register("directorEn", {
            required: "required",
          })}
          lang="en"
        >
          Director
        </InnerInput>
        <InnerInput
          error={errors.directorKa?.message}
          register={register("directorKa", {
            required: "required",
          })}
          lang="ka"
        >
          რეჟისორი
        </InnerInput>
        <InnerTextarea
          error={errors.descriptionEn?.message}
          register={register("descriptionEn", { required: "required" })}
          lang="en"
        >
          Movie Description
        </InnerTextarea>
        <InnerTextarea
          error={errors.descriptionKa?.message}
          register={register("descriptionKa", { required: "required" })}
          lang="ka"
        >
          ფილმის აღწერა
        </InnerTextarea>
        <h1>Gela Barkalaia</h1>
        <h1>Gela Barkalaia</h1>
        <h1>Gela Barkalaia</h1>
      </DarkModalLayout>
    </Modal>
  );
};

export default AddMoviePage;
