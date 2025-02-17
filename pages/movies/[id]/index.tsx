import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MovieDescription } from "@/components/MovieDetailsPage";
import { MovieQuotes } from "@/components/MovieDetailsPage/MovieQuotes";
import React from "react";

const index: React.FC = () => {
  return (
    <Layout>
      <div className="hidden lg:block">
        <DesktopInnerLayout>
          <MovieDescription />
        </DesktopInnerLayout>
      </div>
      <div className="lg:hidden text-white">
        <MovieDescription />
      </div>
    </Layout>
  );
};

export default index;
