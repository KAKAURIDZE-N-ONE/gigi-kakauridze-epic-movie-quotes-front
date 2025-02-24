import React from "react";
import { Props } from "./types";
import { UserShortDescription } from "@/components/UserShortDescription";
import useComments from "./useComments";
import Comment from "@/components/icons/Comment";
import defaultProfileImage from "@/public/images/defaultProfileImage.png";
import Heart from "@/components/icons/Heart";

const Comments: React.FC<Props> = ({ comments, quote_id, likes_count }) => {
  const {
    user,
    handleCreateComment,
    comment,
    createCommentIsPending,
    setComment,
    t,
  } = useComments({
    quote_id,
  });

  return (
    <>
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-3">
          <p className="text-xl">{comments?.length}</p>
          <Comment size="small" />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl">{likes_count}</p>
          <Heart size="small" />
        </div>
      </div>
      <div className="border-t border-t-[#EFEFEF4D] mt-4">
        {comments?.map((comment) => {
          return (
            <div
              className="border-b border-b-[#EFEFEF4D] pt-4 pb-4"
              key={comment.id}
            >
              <UserShortDescription
                avatar={comment.user.avatar}
                name={comment.user.name}
              />
              <p className="mt-4">{comment.comment}</p>
            </div>
          );
        })}
        <div className="flex items-center gap-4 mt-4">
          <div
            style={{
              backgroundImage: `url(${
                user?.avatar ? user?.avatar : defaultProfileImage.src
              })`,
            }}
            className="bg-no-repeat bg-center bg-cover min-w-10 w-10 h-10 rounded-full"
          ></div>
          <form
            className="w-full relative"
            onSubmit={(e) => handleCreateComment(e, comment)}
          >
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              className="rounded-[0.625rem] bg-normalBlue h-10 placeholder:text-white2 pl-5 pr-3 w-full"
              type="text"
              disabled={createCommentIsPending ? true : false}
              placeholder={
                createCommentIsPending ? t("sending") : t("write_comment")
              }
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
