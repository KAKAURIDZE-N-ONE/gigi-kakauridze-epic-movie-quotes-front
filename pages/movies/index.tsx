import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MoviesLayout } from "@/components/MoviesPage";
import React from "react";

const Movies: React.FC = () => {
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
