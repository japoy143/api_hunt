import { useState } from "react";
import TextInput from "../../components/TextInput";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
function SignUp() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");

  const SignUp = async (
    Email: string,
    Password: string,
    ConfirmPassword: string
  ) => {
    if (Password.length >= 8) {
      if (Password === ConfirmPassword) {
        const response = await axios.post(
          "http://localhost:3000/Users/SignUp",
          {
            email: Email,
            password: Password,
            avatar: 0,
            isLogin: false,
          }
        );
        console.log("Successfully SignUp", response.data);
        navigate("/Login");
        toast.success("Account Successfully Created");
      } else {
        console.log("Incorrect Password");
        toast.warning("Incorrect Password");
      }
    } else {
      toast.warning("Password must be atleast 8 character long");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SignUp(Email, Password, ConfirmPassword);
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
        <div className=" col-span-1   px-20 lg:px-60 flex flex-col  justify-center space-y-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
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
              <label>Email</label>
              <TextInput
                className="h-8 w-[100%] rounded-md px-2 border-2 border-primary "
                type="email"
                value={Email}
                onChange={setEmail}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label>Password</label>
              <TextInput
                className="h-8 w-[100%] rounded-md px-2 border-2 border-primary "
                type="password"
                value={Password}
                onChange={setPassword}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <label>ConfirmPassword</label>
              <TextInput
                type="password"
                className="h-8 w-[100%] rounded-md px-2 border-2 border-primary "
                value={ConfirmPassword}
                onChange={setConfirmPassword}
                placeholder="ConfirmPassword"
                required
              />
            </div>

            <div className=" flex flex-row items-center justify-center">
              <Link
                to={"/Login"}
                className=" text-sm font-semibold underline   "
              >
                Already have an account?
              </Link>
            </div>

            <div className="  flex flex-row justify-center">
              <button
                className=" h-10 w-28  bg-primary rounded-md border-2  font-semibold"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
