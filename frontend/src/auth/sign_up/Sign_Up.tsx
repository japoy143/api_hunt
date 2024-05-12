import { useState } from "react";
import TextInput from "../../components/TextInput";

function SignUp() {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  return (
    <div className=" relative h-full w-full">
      <div className=" h-full w-full grid grid-cols-4 ">
        <div></div>
        <div className=" h-full w-full col-span-3  place-content-center">
          <img src="/public/bg/bg.svg" className=" h-[70%] w-[100%] " />
        </div>
      </div>
      <div className=" absolute h-full w-full grid grid-cols-2 top-0">
        <div className=" col-span-1  px-14 flex flex-col  justify-center space-y-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
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

          <form className=" space-y-4 font-poppins">
            <div>
              <label>Email</label>
              <TextInput
                className="h-8 w-[100%] rounded-md px-2 border-2 border-primary "
                value={Email}
                onChange={setEmail}
                placeholder="Email"
              />
            </div>
            <div>
              <label>Password</label>
              <TextInput
                className="h-8 w-[100%] rounded-md px-2 border-2 border-primary "
                value={Password}
                onChange={setPassword}
                placeholder="Password"
              />
            </div>
            <div>
              <label>ConfirmPassword</label>
              <TextInput
                className="h-8 w-[100%] rounded-md px-2 border-2 border-primary "
                value={ConfirmPassword}
                onChange={setConfirmPassword}
                placeholder="ConfirmPassword"
              />
            </div>

            <div className="  flex flex-row justify-center">
              <button className=" h-10 w-28  bg-primary rounded-md border-2  font-semibold">
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
