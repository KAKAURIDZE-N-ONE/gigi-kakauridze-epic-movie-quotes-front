import { useAddQuotePage } from "@/components/AddQuotePage";
import { DarkModalLayout } from "@/components/DarkModalLayout";
import { InnerFile } from "@/components/InnerFile";
import { InnerTextarea } from "@/components/InnerTextarea";
import { Modal } from "@/components/Modal";
import {
  ENGLISH_LANGUAGE_PATTERN_VALUE,
  GEORGIAN_LANGUAGE_PATTERN_VALUE,
} from "@/config/regex";
import { FormFieldsAddMovie, FormFieldsAddQuote } from "@/types/movie";
import Head from "next/head";

import React from "react";
import { Control } from "react-hook-form";

const AddQuotePage: React.FC = () => {
  const {
    movieId,
    redirectedFromMovie,
    register,
    errors,
    control,
    onSubmit,
    handleSubmit,
    createMovieIsPending,
  } = useAddQuotePage();

  return (
    <Modal turnOfFn={() => {}}>
      <Head>
        <title>Add Quote</title>
      </Head>
      <DarkModalLayout
        submitFn={handleSubmit(onSubmit)}
        btnText="Add quote"
        xBtnUrl={redirectedFromMovie ? `/movies/${movieId}` : "/news-feed"}
        isPending={createMovieIsPending}
        title={`Add quote`}
      >
        <InnerFile
          control={control as Control<FormFieldsAddMovie | FormFieldsAddQuote>}
          error={errors.image?.message}
          register={register("image", {
            required: "required",
          })}
        />
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
      </DarkModalLayout>
    </Modal>
  );
};

export default AddQuotePage;
