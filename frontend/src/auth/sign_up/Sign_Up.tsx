import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "../../api/axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const Register_Url = "/Users/SignUp";

function SignUp() {
  const navigation = useNavigate();

  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validMatch, setValidMatchPassword] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    const match = password === confirmPassword;
    setValidMatchPassword(match);
  }, [password, confirmPassword]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const v1 = PWD_REGEX.test(password);
    if (!v1) {
      toast.error("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(Register_Url, {
        email,
        password,
        avatar: 0,
        isLogin: false,
      });
      console.log(response.data);
      toast.success("Sign Up Successfully");
      navigation("/Login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (!err?.response) {
        toast.error("No Server Response");
      } else if (err.response?.status === 409) {
        toast.error("Email taken");
      }
    }
  };

  return (
    <section className=" relative h-full w-full">
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

          <form className="font-poppins" onSubmit={handleSubmit}>
            <label className="" htmlFor="email">
              Email
            </label>
            <input
              className=" w-[100%] h-8  rounded pl-2 mt-2 mb-2 "
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className=" " htmlFor="password">
              Password
            </label>
            <input
              className=" w-[100%] h-8  rounded pl-2 mt-2 mb-2"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                passwordFocus && !validPassword
                  ? "  text-xs  text-justify "
                  : "hidden"
              }
            >
              8 to 24 characters. <br />
              Must include uppercase and lowercase letters and a number.
            </p>

            <label className=" " htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              className=" w-[100%] h-8  rounded pl-2 mt-2 mb-2"
              type="password"
              id="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="validmatchpassword"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p></p>
            <p
              id="validmatchpassword"
              className={
                matchFocus && !validMatch
                  ? "  text-xs  text-justify "
                  : "hidden"
              }
            >
              the password must match
            </p>

            <div className=" flex flex-row items-center justify-center mt-4  mb-2">
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
                disabled={
                  !email || !validMatch || !validPassword ? true : false
                }
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
