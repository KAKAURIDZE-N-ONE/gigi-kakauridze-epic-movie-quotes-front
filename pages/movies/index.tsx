import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { MoviesLayout } from "@/components/MoviesPage";
import useMoviesPage from "@/components/MoviesPage/useMoviesPage";
import { updateActiveMovieModal } from "@/store/slices/modalSlice";
import React from "react";

const Movies: React.FC = () => {
  const { isPending, activeMovieModal, isMobile, dispatch } = useMoviesPage();

  if (isPending) return <Loader />;
  else
    return (
      <>
        {activeMovieModal === "add" && (
          <CreateOrEditMovieBody
            turnOfFn={() => dispatch(updateActiveMovieModal(null))}
            type="create"
          />
        )}
        <Layout>
          {!isMobile ? (
            <div className="hidden lg:block">
              <DesktopInnerLayout>
                <MoviesLayout />
              </DesktopInnerLayout>
            </div>
          ) : (
            <div className="block lg:hidden">
              <MoviesLayout />
            </div>
          )}
        </Layout>
      </>
    );
};

export default Movies;
