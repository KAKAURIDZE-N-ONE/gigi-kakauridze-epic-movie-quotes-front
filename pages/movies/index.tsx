import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { MoviesLayout } from "@/components/MoviesPage";
import useRequireAuth from "@/hooks/useRequireAuth";
import React from "react";

const Movies: React.FC = () => {
  const { isPending } = useRequireAuth();

  if (isPending) return <Loader />;
  else
    return (
      <Layout>
        <div className="hidden lg:block">
          <DesktopInnerLayout>
            <MoviesLayout />
          </DesktopInnerLayout>
        </div>
        <div className="block lg:hidden">
          <MoviesLayout />
        </div>
      </Layout>
    );
};

export default Movies;
