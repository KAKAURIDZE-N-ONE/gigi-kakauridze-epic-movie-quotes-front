import { DarkModalLayout } from "@/components/DarkModalLayout";
import { InnerFile } from "@/components/InnerFile";
import { InnerTextarea } from "@/components/InnerTextarea";
import Loader from "@/components/Loader";
import { Modal } from "@/components/Modal";
import {
  ENGLISH_LANGUAGE_PATTERN_VALUE,
  GEORGIAN_LANGUAGE_PATTERN_VALUE,
} from "@/config/regex";
import { FormFieldsAddMovie, FormFieldsAddQuote } from "@/types/movie";
import Head from "next/head";

import { Control } from "react-hook-form";
import { Props } from "./types";
import { MovieShortDescription } from "../MovieShortDescription";
import useViewCreateEditQuoteBody from "./useViewCreateEditQuoteBody";

const ViewCreateEditQuoteBody: React.FC<Props> = ({
  darkModalIsScrollable = true,
  type,
}) => {
  const {
    movieId,
    redirectedFromMovie,
    register,
    errors,
    control,
    onSubmitCreate,
    onSubmitEdit,
    handleSubmit,
    createQuoteIsPending,
    updateQuoteIsPending,
    movieShort,
    router,
    quoteImage,
  } = useViewCreateEditQuoteBody();

  return (
    <>
      {(createQuoteIsPending || updateQuoteIsPending) && <Loader />}
      <Modal
        turnOfFn={() => {
          if (redirectedFromMovie) {
            router.push(`/movies/${movieId}`);
          }
        }}
      >
        <Head>
          <title>
            {type === "create" ? "Add" : type === "edit" ? "Edit" : ""} Quote
          </title>
        </Head>
        <DarkModalLayout
          type={type}
          submitFn={handleSubmit(
            type === "create"
              ? onSubmitCreate
              : type === "edit"
              ? onSubmitEdit
              : () => {}
          )}
          btnText={`${
            type === "create"
              ? "Add quote"
              : type === "edit"
              ? "Save changes"
              : ""
          } `}
          isPending={createQuoteIsPending}
          title={`${
            type === "create" ? "Add" : type === "edit" ? "Edit" : ""
          } quote`}
          needScroll={darkModalIsScrollable}
        >
          {type === "create" && (
            <MovieShortDescription movieShort={movieShort} />
          )}
          {type === "create" && (
            <InnerFile
              control={
                control as Control<FormFieldsAddMovie | FormFieldsAddQuote>
              }
              error={errors.image?.message}
              register={register("image", {
                required: "required",
              })}
            />
          )}
          <div className="mt-2">
            <InnerTextarea
              disabled={type === "view"}
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
            disabled={type === "view"}
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
          {(type === "edit" || type === "view") && (
            <InnerFile
              disabled={type === "view"}
              size="big"
              savedImage={quoteImage}
              control={
                control as Control<FormFieldsAddMovie | FormFieldsAddQuote>
              }
              error={errors.image?.message}
              register={register("image")}
            />
          )}
        </DarkModalLayout>
      </Modal>
    </>
  );
};

export default ViewCreateEditQuoteBody;
