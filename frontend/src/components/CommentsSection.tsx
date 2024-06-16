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
        <div className="mt-2 grid h-20 w-[70%] grid-cols-6 rounded-lg py-4 font-poppins">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <img
              src={Img[comment.avatar].img}
              className="mx-2 h-[70%] space-x-2"
            />
          </div>

          <div className="col-span-4 py-2">
            <div className="flex flex-row items-center justify-between">
              <p className="text-start text-sm">
                {removeEmailSign(comment.email)}
              </p>
              <p className="text-xs">{comment.timestamp}</p>
            </div>

            <p className="text-sm">{comment.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CommentsSection;
