import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MoviesLayout } from "@/components/MoviesPage";
import useMoviesPage from "@/components/MoviesPage/useMoviesPage";
import PermissionCheckerLoader from "@/components/PermissionCheckerLoader";
import { updateActiveMovieModal } from "@/store/slices/modalSlice";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "movies-page",
        "inner-layout",
        "movie-modal",
        "landing-page",
        "notifications",
        "quote-modals",
      ])),
    },
  };
}

const Movies: React.FC = () => {
  const { isPending, activeMovieModal, isMobile, dispatch } = useMoviesPage();

  if (isPending) return <PermissionCheckerLoader />;
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
