import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { MovieDescription } from "@/components/MovieDetailsPage";
import useRequireAuth from "@/hooks/useRequireAuth";
import React from "react";
import { useMediaQuery } from "react-responsive";

const EditMovie: React.FC = () => {
  const { isPending } = useRequireAuth();

  const isMobile = useMediaQuery({ maxWidth: 1023 });
  if (isPending) return <Loader />;
  else
    return (
      <>
        {isMobile ? (
          <CreateOrEditMovieBody />
        ) : (
          <>
            <CreateOrEditMovieBody />
            <Layout>
              <DesktopInnerLayout>
                <MovieDescription />
              </DesktopInnerLayout>
            </Layout>
          </>
        )}
      </>
    );
};

export default EditMovie;
