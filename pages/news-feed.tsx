import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import React from "react";

const NewsFeed: React.FC = () => {
  return (
    <Layout>
      <div className="hidden lg:block">
        <DesktopInnerLayout>
          <div className="text-white">News Feed</div>
        </DesktopInnerLayout>
      </div>
      <div className="lg:hidden block text-white">News Feed</div>
    </Layout>
  );
};

export default NewsFeed;
