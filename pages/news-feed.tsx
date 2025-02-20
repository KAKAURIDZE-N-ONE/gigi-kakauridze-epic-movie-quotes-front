import { DesktopInnerLayout } from "@/components/DesktopInnerLayout";
import { Layout } from "@/components/Layout";
import Loader from "@/components/Loader";
import { NewsFeedLayout } from "@/components/NewsFeedPage";
import useRequireAuth from "@/hooks/useRequireAuth";
import React from "react";

const NewsFeed: React.FC = () => {
  const { isPending } = useRequireAuth();

  if (isPending) return <Loader />;
  else
    return (
      <Layout>
        <div className="hidden lg:block">
          <DesktopInnerLayout>
            <NewsFeedLayout />
          </DesktopInnerLayout>
        </div>
        <div className="lg:hidden block text-white">
          <NewsFeedLayout />
        </div>
      </Layout>
    );
};

export default NewsFeed;
