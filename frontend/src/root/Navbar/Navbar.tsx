import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className=" w-screen  p-4 shadow-md flex flex-row items-center  justify-between ">
      <div className="w-20"></div>
      <div className=" flex flex-row items-center space-x-4 ">
        <img src="/icons/confetti.svg" className=" h-4 w-4   -rotate-90" />
        <p className=" font-poppins font-medium text-2xl">API Hunt</p>
        <img src="/icons/confetti.svg" className=" h-4 w-4" />
      </div>

      <button
        className=" h-8  w-20 bg-buttonColor text-white rounded  cursor-pointer"
        onClick={() => navigate("/SignUp")}
      >
        SignUp
      </button>
    </nav>
  );
}

export default Navbar;
