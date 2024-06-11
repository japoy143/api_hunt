import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/AuthSlice";
import { toast } from "sonner";

function SignIn() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  axios.defaults.withCredentials = true;

  const Login = async (Email: string, Password: string) => {
    const user = await axios.post("http://localhost:3000/Users/Login", {
      email: Email,
      password: Password,
    });

    if (user.data.Message === "Success") {
      const { email, id, accessToken } = user.data;
      if (!accessToken) return toast.error("Unauthorize User");

      dispatch(login({ email, id }));
      console.log(user.data);
      toast.success("Login Successfully");
      navigate("/");
    }

    if (user.data === "Incorrect Password") {
      console.log("Error", user.data);
      toast.warning("Incorrect Password");
      console.log(user.status);
    }

    if (user.status === 203) {
      console.log("Error", user.data);
      toast.warning("Please Create An Account");
    }
    console.log(user.status);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Login(Email, Password);
  };

  return (
    <div className=" relative h-full w-full">
      <div className=" h-full w-full grid grid-cols-4 ">
        <div></div>
        <div className=" h-full w-full col-span-3  place-content-center">
          <img src="/bg/bg.svg" className=" h-[70%] w-[100%] " />
        </div>
      </div>
      {/* Login Form*/}
      <div className=" absolute h-full w-full grid grid-cols-2 top-0">
        <div className=" col-span-1  px-20 lg:px-60 flex flex-col  justify-center space-y-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <div className=" flex flex-row  justify-center  items-center space-x-4">
            <img src="/icons/confetti.svg" className="h-4 w-4   -rotate-90" />
            <p className=" text-primary font-poppins text-2xl font-medium">
              API Hunt
            </p>
            <img src="/icons/confetti.svg" className="h-4 w-4" />
          </div>
          <p className=" text-center font-poppins font-medium">
            Sign in to your Account
          </p>

          <form className=" space-y-4 font-poppins" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="mail">
                Email
                <input
                  className="w-[100%] h-8  rounded pl-2 mt-2 mb-2"
                  id="mail"
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
              </label>
            </div>
            <div>
              <label htmlFor="pwd">
                Password
                <input
                  className="w-[100%] h-8  rounded pl-2 mt-2 mb-2"
                  id="pwd"
                  type=" password"
                  autoComplete="off"
                  value={Password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className=" flex flex-row justify-between text-sm font-semibold underline">
              <Link to={"/SignUp"}> Create An Account</Link>
              <p>Forgot Password</p>
            </div>
            <div className="  flex flex-row justify-center">
              <button
                className=" h-10 w-28  bg-primary rounded-md border-2  font-semibold"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
