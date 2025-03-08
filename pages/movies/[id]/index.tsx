import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MovieDescription } from "@/components/MovieDetailsPage";
import PermissionCheckerLoader from "@/components/PermissionCheckerLoader";
import { ViewCreateEditQuoteBody } from "@/components/ViewCreateEditQuoteBody";
import useIsMounted from "@/hooks/useIsMounted";
import useRequireAuth from "@/hooks/useRequireAuth";
import {
  selectActiveMovieModal,
  selectActiveQuoteModal,
  updateActiveModalQuoteId,
  updateActiveMovieModal,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "movie-description-page",
        "inner-layout",
        "movie-modal",
        "quote-modal",
        "news-feed-page",
        "landing-page",
        "notifications",
        "quote-modals",
      ])),
    },
  };
};

const ViewMovie: React.FC = () => {
  const activeMovieModal = useAppSelector(selectActiveMovieModal);
  const activeQuoteModal = useAppSelector(selectActiveQuoteModal);
  const dispatch = useDispatch();
  const { isPending } = useRequireAuth();
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const mounted = useIsMounted();
  if (!mounted) return null;

  if (isPending) return <PermissionCheckerLoader />;
  else
    return (
      <>
        {activeQuoteModal === "view" && (
          <ViewCreateEditQuoteBody
            turnOfFn={() => dispatch(updateActiveQuoteModal(null))}
            type="view"
          />
        )}
        {activeMovieModal === "edit" && (
          <CreateOrEditMovieBody
            type="edit"
            turnOfFn={() => dispatch(updateActiveMovieModal(null))}
          />
        )}

        {activeQuoteModal === "add" && (
          <ViewCreateEditQuoteBody
            turnOfFn={() => dispatch(updateActiveQuoteModal(null))}
            type="create"
          />
        )}
        {activeQuoteModal === "edit" && (
          <ViewCreateEditQuoteBody
            turnOfFn={() => {
              dispatch(updateActiveQuoteModal(null));
              dispatch(updateActiveModalQuoteId(null));
            }}
            type="edit"
          />
        )}
        <Layout>
          {isMobile ? (
            <MovieDescription />
          ) : (
            <DesktopInnerLayout>
              <MovieDescription />
            </DesktopInnerLayout>
          )}
        </Layout>
      </>
    );
};

export default ViewMovie;
