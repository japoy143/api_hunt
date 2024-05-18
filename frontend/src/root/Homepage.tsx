import { useEffect, useState } from "react";
import Layout from "./Layout";
import Navbar from "./Navbar/Navbar";
import ApiCardsList from "../components/ApiCardsList";

import axios from "axios";
import { APIType } from "../types";

function Homepage() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [data, setData] = useState<APIType[]>([]);

  useEffect(() => {
    //fetch all the data
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/APIs/");
      setData(response.data);
    };

    fetch();
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

        <div className=" overflow-scroll h-[700px]">
          <ApiCardsList data={data} searchInput={searchInput} />
        </div>
      </main>
    </Layout>
  );
}

export default Homepage;
