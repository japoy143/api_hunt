import axios from "axios";
import { useState, useEffect } from "react";
import ApiCardsList from "../components/ApiCardsList";
import MyListLoader from "../components/Loader";
import Layout from "./Layout";
import Navbar from "./Navbar/Navbar";

function UserPage() {
  const [searchInput, setSearchInput] = useState<string>("");

  const [isDataReady, setIsDataReady] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/APIs/");

      if (res.status === 200) {
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
      <main className="w-screen p-20">
        <h1 className="text-center font-poppins text-4xl font-medium">
          Explore API's
        </h1>
        <br />
        <p className="text-center font-poppins text-lg">
          Find the exact API’s for your next project to Unlock the potential of
          your next project
        </p>
        <br />
        <div className="relative h-10 w-full">
          <img
            src="/icons/search.svg"
            className="absolute left-4 top-2 h-6 w-6"
          />
          <input
            className="h-full w-full rounded-md bg-bgwhite px-14 font-poppins outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <br />

        <div className="h-[700px] overflow-scroll">
          {(isDataReady && <ApiCardsList searchInput={searchInput} />) || (
            <div className="flex flex-col items-center justify-center">
              <MyListLoader />
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default UserPage;
