import axios from "axios";
import { useState, useEffect } from "react";
import ApiCardsList from "../components/ApiCardsList";
import MyListLoader from "../components/Loader";
import { APIType } from "../types";
import Layout from "./Layout";
import Navbar from "./Navbar/Navbar";

function UserPage() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [data, setData] = useState<APIType[]>([]);
  const [isDataReady, setIsDataReady] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/APIs/");

      if (res.status === 200) {
        setData(res.data);
        setIsDataReady(true);
      } else {
        console.error(res.status);
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <Navbar />
      <main className="w-screen p-20 ">
        <h1 className=" text-center  text-4xl font-poppins font-medium">
          Explore API's
        </h1>
        <br />
        <p className=" text-center font-poppins text-lg">
          Find the exact API’s for your next project to Unlock the potential of
          your next project
        </p>
        <br />
        <div className=" relative  w-full h-10  ">
          <img
            src="/icons/search.svg"
            className=" absolute h-6 w-6 top-2 left-4"
          />
          <input
            className="  h-full w-full  bg-bgwhite rounded-md   px-14 font-poppins  outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <br />

        <div className="  overflow-scroll h-[700px] ">
          {(isDataReady && (
            <ApiCardsList data={data} searchInput={searchInput} />
          )) || (
            <div className=" flex flex-col items-center justify-center">
              <MyListLoader />
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default UserPage;
