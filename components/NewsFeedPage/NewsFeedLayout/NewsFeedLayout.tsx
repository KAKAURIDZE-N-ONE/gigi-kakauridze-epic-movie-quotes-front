import PencilSquare from "@/svgs/PencilSquare";
import React from "react";
import useNewsFeedLayout from "./useNewsFeedLayout";
import { Post } from "../Post";

const NewsFeedLayout: React.FC = () => {
  const { posts } = useNewsFeedLayout();
  return (
    <div className="mt-[7.5rem]">
      <div className=" px-[2.1875rem]">
        <div className="inline-block">
          <div className="flex items-center gap-3 cursor-pointer">
            <PencilSquare />
            <h2>Write new quote</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-7 gap-8">
        {posts?.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default NewsFeedLayout;
