import React from "react";
import { Props } from "./types";
import { UserShortDescription } from "@/components/UserShortDescription";
import usePost from "./usePost";
import { Comments } from "@/components/NewsFeedPage";

const Post: React.FC<Props> = ({ post }) => {
  const { language } = usePost();

  return (
    <div className="bg-darkerBlue py-6 px-[2.1875rem] lg:px-5">
      <UserShortDescription
        avatar={post?.movie?.user?.avatar}
        name={post?.movie?.user?.name}
      />
      <p className="text-base mt-4">
        {post?.quote[language]} -{" "}
        <span className="text-skin font-bold">
          {post?.movie.name[language]}
        </span>
        , ({post?.movie.year})
      </p>
      <div
        style={{
          backgroundImage: `url(${post?.image})`,
        }}
        className="aspect-[1.79] bg-no-repeat bg-cover bg-center rounded-[0.625rem] mt-4"
      ></div>
      <Comments
        likes_count={post.likes_count}
        quote_id={post.id}
        comments={post.comments}
      />
    </div>
  );
};

export default Post;
