import { useSelector } from "react-redux";
import { commentType } from "../types";
import { avatarType } from "../types";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";

type commentSectionProps = {
  commentId: string;
};

const Img: avatarType[] = [
  { img: "/avatar/avatar_man1.svg" },
  { img: "/avatar/avatar_man2.svg" },
  { img: "/avatar/avatar_man3.svg" },
  { img: "/avatar/avatar_girl1.svg" },
  { img: "/avatar/avatar_girl2.svg" },
  { img: "/avatar/avatar_girl3.svg" },
];

const removeEmailSign = (email: string) => {
  const sign = email.split("@");

  const removeEmail = sign[0];

  return removeEmail;
};

function CommentsSection({ commentId }: commentSectionProps) {
  const data = useSelector((state: RootState) => state.api.data);
  const [comment, setComments] = useState<commentType[]>([]);

  const userAvatar = useSelector((state: RootState) => state.auth.avatar);

  useEffect(() => {
    const filteredCommentSection = data.filter((api) => api._id === commentId);
    const userComments = filteredCommentSection.flatMap(
      (comment) => comment["comments"],
    );
    console.log(filteredCommentSection);
    setComments(userComments);
  }, [commentId, data]);

  return (
    <>
      {comment.map((comment) => (
        <div className="w-[50%]rounded-lg mt-2 flex h-[200px] flex-col items-start justify-start py-4">
          <div className="flex flex-row items-center justify-center">
            <img
              src={
                userAvatar === null ? "/icons/avatar.svg" : Img[userAvatar].img
              }
              className="mx-2 max-h-[40px] space-x-2"
            />
            <div className="flex flex-row items-center space-x-4">
              <p className="text-sm">{removeEmailSign(comment.email)}</p>
              <p className="text-xs">{comment.timestamp}</p>
            </div>
          </div>

          <div className="h-[150px] max-w-[400px]">
            <p className="pl-14">{comment.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CommentsSection;
