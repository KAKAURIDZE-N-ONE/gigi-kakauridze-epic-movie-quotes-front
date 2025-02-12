import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import { MovieDescription } from "@/components/MovieDetailsPage";
import React from "react";

const index: React.FC = () => {
  return (
    <Layout>
      <div className="hidden lg:inline-block">
        <DesktopInnerLayout>
          <MovieDescription />
        </DesktopInnerLayout>
      </div>
    </Layout>
  );
};

export default index;
