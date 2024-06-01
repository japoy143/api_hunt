import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/AuthSlice";
import { toast } from "sonner";
import { useState } from "react";
import ChangeAvatar from "../../components/ChangeAvatar";

export type avatar = {
  img: string;
};

const Img: avatar[] = [
  { img: "/avatar/avatar_man1.svg" },
  { img: "/avatar/avatar_man2.svg" },
  { img: "/avatar/avatar_man3.svg" },
  { img: "/avatar/avatar_girl1.svg" },
  { img: "/avatar/avatar_girl2.svg" },
  { img: "/avatar/avatar_girl3.svg" },
];
function Navbar() {
  const [avatar, setAvatar] = useState<boolean>(false);
  const [profileAvatar, setProfileAvatar] = useState<number | null>(null);
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.isLogin);
  const dispatch = useDispatch();

  const onHandleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };

  return (
    <nav className=" w-screen  p-4 shadow-md flex flex-row items-center  justify-between ">
      {user ? (
        <div
          className="  relative flex flex-row items-center justify-center bg-slate-200 rounded-full h-10 w-10"
          onClick={() => setAvatar((prev) => !prev)}
        >
          <img
            src={
              profileAvatar === null
                ? "/icons/avatar.svg"
                : Img[profileAvatar].img
            }
            className=" h-full w-full"
          />
          <img
            src="/icons/change.svg"
            className="h-4 w-4 absolute top-1 left-8"
          />
          {avatar && (
            <div className="bg-bgwhite h-20 w-[200px] rounded-md absolute left-0 top-16">
              <ChangeAvatar
                avatars={Img}
                setAvatar={(val) => setProfileAvatar(val)}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="w-44"></div>
      )}
      <div className=" flex flex-row items-center space-x-4 ">
        <img src="/icons/confetti.svg" className=" h-4 w-4   -rotate-90" />
        <p className=" font-poppins font-medium text-2xl">API Hunt</p>
        <img src="/icons/confetti.svg" className=" h-4 w-4" />
      </div>

      {user ? (
        <button
          className=" font-poppins h-8  w-20 bg-buttonColor text-white rounded  cursor-pointer"
          onClick={onHandleLogout}
        >
          Logout
        </button>
      ) : (
        <div className=" space-x-2">
          <button
            className=" font-poppins h-8  w-20 bg-buttonColor text-white rounded  cursor-pointer"
            onClick={() => navigate("/SignUp")}
          >
            SignUp
          </button>
          <button
            className=" font-poppins h-8  w-20 bg-buttonColor text-white rounded  cursor-pointer"
            onClick={() => navigate("/LogIn")}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
