import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import React from "react";

const Movies: React.FC = () => {
  return (
    <Layout>
      <div className="hidden lg:block">
        <DesktopInnerLayout>
          <div className="text-white">Movies</div>
        </DesktopInnerLayout>
      </div>
      <div className="lg:hidden block text-white">Movies</div>
    </Layout>
  );
};

export default Movies;
