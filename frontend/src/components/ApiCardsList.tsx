import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateIsCommentSection, postComment } from "../redux/APISlice";
import CommentsSection from "./CommentsSection";
import { toast } from "sonner";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

type ApiCardsListProps = {
  searchInput: string;
};

function ApiCardsList({ searchInput }: ApiCardsListProps) {
  const navigate = useNavigate();

  const axiosPrivate = useAxiosPrivate();

  //api list
  const data = useSelector((state: RootState) => state.api.data);

  //user Details
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const userAvatar = useSelector((state: RootState) => state.auth.avatar);
  const userEmail = useSelector((state: RootState) => state.auth.email);
  const userId = useSelector((state: RootState) => state.auth.id);

  const userAccessToken = useSelector(
    (state: RootState) => state.auth.accessToken,
  );

  //date today
  const timeToday = new Date();

  // comment value
  const [comment, setComment] = useState<string>("");

  //controller
  const dispatch = useDispatch();

  //submit
  const handleSubmitComment = async (id: string) => {
    const commentData = {
      email: userEmail,
      userId: userId,
      avatar: userAvatar,
      comment: comment,
      timestamp: timeToday.toLocaleTimeString(),
    };
    dispatch(
      postComment({
        id: id,
        comment: commentData,
      }),
    );

    setComment("");

    const previousComments = data
      .filter((api) => api._id === id)
      .map((api) => api.comments)
      .flat();
    const res = await axiosPrivate.patch(
      `APIs/${id}`,
      {
        comments: [commentData, ...previousComments],
      },
      {
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      },
    );

    console.log(userAccessToken);

    if (res.status === 400) {
      toast.error("Authorization needed");
    }
    if (res.status === 200) {
      console.log("Comments Updated");
    }
  };

  return data.map((api, i) => {
    if (
      api.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      api.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    ) {
      return (
        <article
          className={`mt-4 grid w-full grid-rows-2 rounded-lg bg-bgwhite p-10 font-poppins ${api.isCommentSection ? "h-[400px]" : "h-[140px]"}`}
          key={i}
        >
          <div className="flex-1 space-y-2">
            <div className="flex flex-row items-center space-x-2">
              <a
                className="cursor-pointer text-xl font-medium underline hover:text-blue-500"
                href={api.link}
                target="_blank"
              >
                {api.name}
              </a>
              <img src="/icons/link.svg" className="h-5 w-5 -rotate-6" />
              <div>
                <p className="text-end">{api.category}</p>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <article className="col-span-1 line-clamp-2">
                <p className="">{api.description}</p>
              </article>
              <aside className="flex flex-row justify-end space-x-4">
                <img
                  src="/icons/key.svg"
                  alt=""
                  title="Need Api Key"
                  className="h-6 w-6"
                />

                <img
                  onClick={
                    isLogin
                      ? () => dispatch(updateIsCommentSection(api._id))
                      : () => navigate("/SignUp")
                  }
                  src="/icons/comment.svg"
                  alt=""
                  title={isLogin ? "Comments" : "Sign Up to Comment"}
                  className="h-6 w-6 cursor-pointer"
                />
                <img
                  src="/icons/heart.svg"
                  alt=""
                  title=""
                  className="h-6 w-6"
                />
              </aside>
            </div>
            {api.isCommentSection && (
              <section className="w-100 h-[200px] flex-1 overflow-scroll overflow-x-hidden rounded bg-bgCommentSection p-2">
                <div className="flex h-10 w-full flex-row items-center space-x-2 px-4">
                  <input
                    type="text"
                    placeholder="write a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="h-full rounded bg-bgwhite px-4 xs:w-[16%] sm:w-[40%] md:w-[50%] lg:w-[92%]"
                  />
                  <button onClick={() => handleSubmitComment(api._id)}>
                    <img src="/icons/send.svg" className="h-8 w-8 rotate-45" />
                  </button>
                </div>
                <div className="flex h-full w-full flex-col items-start px-4 pr-16">
                  <CommentsSection commentId={api._id} />
                </div>
              </section>
            )}
          </div>
        </article>
      );
    }
  });
}

export default ApiCardsList;
