import { CreateOrEditMovieBody } from "@/components/CreateOrEditMovieBody";
import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MovieDescription } from "@/components/MovieDetailsPage";
import React from "react";
import { useMediaQuery } from "react-responsive";

const EditMovie: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

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
