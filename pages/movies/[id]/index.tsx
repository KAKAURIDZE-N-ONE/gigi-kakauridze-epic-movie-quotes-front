import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { MovieDescription } from "@/components/MovieDetailsPage";
import { ViewCreateEditQuoteBody } from "@/components/ViewCreateEditQuoteBody";
import useRequireAuth from "@/hooks/useRequireAuth";
import {
  selectActiveMovieModal,
  selectActiveQuoteModal,
  updateActiveModalQuoteId,
  updateActiveMovieModal,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

const ViewMovie: React.FC = () => {
  const activeMovieModal = useAppSelector(selectActiveMovieModal);
  const activeQuoteModal = useAppSelector(selectActiveQuoteModal);
  const dispatch = useDispatch();
  const { isPending } = useRequireAuth();
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  if (isPending) return <Loader />;
  else
    return (
      <>
        {activeMovieModal === "edit" && (
          <CreateOrEditMovieBody
            type="edit"
            turnOfFn={() => dispatch(updateActiveMovieModal(null))}
          />
        )}
        {activeQuoteModal === "view" && (
          <ViewCreateEditQuoteBody
            turnOfFn={() => dispatch(updateActiveQuoteModal(null))}
            type="view"
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
