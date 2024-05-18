import { APIType } from "../types";

type ApiCardsListProps = {
  data: APIType[];
  searchInput: string;
};

function ApiCardsList({ data, searchInput }: ApiCardsListProps) {
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
            <h1 className=" text-xl font-medium">{api.name}</h1>
            <p className="  text-justify opacity-60">{api.description}</p>
          </div>
          <div className=" w-[30%] p-6">
            <p className=" text-center">{api.category}</p>
            {/* TODO:add comment and likes*/}
          </div>
        </div>
      );
    }
  });
}

export default ApiCardsList;
