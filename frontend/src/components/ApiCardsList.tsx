import { useNavigate } from "react-router-dom";
import { APIType } from "../types";

type ApiCardsListProps = {
  data: APIType[];
  searchInput: string;
};

function ApiCardsList({ data, searchInput }: ApiCardsListProps) {
  const navigate = useNavigate();
  return data.map((api, i) => {
    if (
      api.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      api.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    ) {
      return (
        <div
          className=" font-poppins bg-bgwhite w-full h-40 mt-4 rounded-lg flex flex-row"
          key={i}
        >
          <div className="   text-ellipsis overflow-hidden w-[70%] p-6">
            <div className=" flex flex-row space-x-2 ">
              <h1 className=" text-xl font-medium underline hover:text-blue-600">
                <a href={api.link} target={api.name}>
                  {api.name}
                </a>
              </h1>
              <img
                src="/icons/link.svg"
                title="link"
                className=" h-5 w-5  -rotate-12 "
              />
            </div>
            <p className="  text-justify opacity-60">{api.description}</p>
          </div>
          <div className=" w-[30%]  grid grid-rows-2">
            <div className=" flex flex-col items-center justify-center">
              <p className=" text-center">{api.category}</p>
            </div>
            <div className=" flex flex-row justify-evenly items-center py-4">
              {(api.key && (
                <img
                  src="/icons/key.svg"
                  title="Api Key Required"
                  className=" h-6 w-6 rotate-12 cursor-pointer"
                />
              )) || <div className="h-6 w-6"></div>}
              <button onClick={() => navigate("/SignUp")}>
                <img
                  src="/icons/comment.svg"
                  title="Sign Up to view comments"
                  className="h-6 w-6"
                />
              </button>
              <button onClick={() => navigate("/SignUp")}>
                <img
                  src="/icons/heart.svg"
                  title="Sign Up to view likes"
                  className=" h-6 w-6"
                />
              </button>
            </div>
          </div>
        </div>
      );
    }
  });
}

export default ApiCardsList;
