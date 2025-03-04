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
import { CommentsAndLikes } from "../NewsFeedPage";

const ViewCreateEditQuoteBody: React.FC<Props> = ({ type, turnOfFn }) => {
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
    quote,
    isMobile,
    handleDeleteQuote,
    deleteQuoteIsPending,
    t,
    comments,
    likesQuantity,
    currentUserLike,
    mountTwise,
  } = useViewCreateEditQuoteBody({ type });

  return (
    <>
      {(createQuoteIsPending ||
        updateQuoteIsPending ||
        deleteQuoteIsPending) && <Loader />}
      <Modal
        turnOfFn={() => {
          if (turnOfFn) turnOfFn();
          else if (redirectedFromMovie) {
            router.push(`/movies/${movieId}`);
          }
        }}
      >
        <Head>
          <title>
            {type === "create"
              ? t("add_quote")
              : type === "edit"
              ? t("edit_quote")
              : ""}
            Quote
          </title>
        </Head>
        <DarkModalLayout
          xBtnFn={turnOfFn}
          trashFn={handleDeleteQuote}
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
              ? t("add_quote")
              : type === "edit"
              ? t("save_changes")
              : ""
          } `}
          isPending={createQuoteIsPending}
          title={`${
            type === "create"
              ? t("add_quote")
              : type === "edit"
              ? t("edit_quote")
              : ""
          }`}
        >
          {type === "create" && (
            <MovieShortDescription movieShort={movieShort} />
          )}
          {type === "create" && isMobile && (
            <div className="mt-2">
              <InnerFile
                control={
                  control as Control<FormFieldsAddMovie | FormFieldsAddQuote>
                }
                error={errors.image?.message}
                register={register("image", {
                  required: t("required"),
                })}
              />
            </div>
          )}
          <div className="mt-2">
            <InnerTextarea
              disabled={type === "view"}
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
              Create new quote
            </InnerTextarea>
          </div>
          <InnerTextarea
            disabled={type === "view"}
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
            შექმენი ახალი ციტატა
          </InnerTextarea>
          {type === "create" && !isMobile && (
            <div className="mt-3">
              <InnerFile
                control={
                  control as Control<FormFieldsAddMovie | FormFieldsAddQuote>
                }
                error={errors.image?.message}
                register={register("image", {
                  required: t("required"),
                })}
              />
            </div>
          )}
          {(type === "edit" || type === "view") && (
            <div className="mt-1">
              <InnerFile
                disabled={type === "view"}
                size="big"
                type={type}
                savedImage={quote?.image}
                control={
                  control as Control<FormFieldsAddMovie | FormFieldsAddQuote>
                }
                error={errors.image?.message}
                register={register("image")}
              />
            </div>
          )}
          {!mountTwise && type === "view" && quote && (
            <div className="loader mx-auto mt-10"></div>
          )}
          {mountTwise && type === "view" && quote && (
            <CommentsAndLikes
              current_user_like={currentUserLike}
              likes_count={likesQuantity}
              quote_id={quote?.id}
              comments={comments}
            />
          )}
        </DarkModalLayout>
      </Modal>
    </>
  );
};

export default ViewCreateEditQuoteBody;
