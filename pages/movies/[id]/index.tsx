import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { MovieDescription } from "@/components/MovieDetailsPage";
import { ViewCreateEditQuoteBody } from "@/components/ViewCreateEditQuoteBody";
import useIsMounted from "@/hooks/useIsMounted";
import useRequireAuth from "@/hooks/useRequireAuth";
import { authInstace } from "@/services/axios";
import {
  selectActiveMovieModal,
  selectActiveQuoteModal,
  updateActiveModalQuoteId,
  updateActiveMovieModal,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

export async function getStaticPaths() {
  try {
    const { data: movies } = await authInstace.get(
      "http://127.0.0.1:8000/api/movies"
    );

    return {
      paths: movies.map((movie: { id: string }) => ({
        params: { id: movie.id.toString() },
      })),
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
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

  if (isPending) return <Loader />;
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
