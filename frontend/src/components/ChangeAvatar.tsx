import { avatar } from "../root/Navbar/Navbar";
type ChangeAvatarProps = {
  avatars: avatar[];
  setAvatar: (value: number) => void;
};

function ChangeAvatar({ avatars, setAvatar }: ChangeAvatarProps) {
  return (
    <div className="h-full w-full  grid grid-cols-3 py-1  ">
      {avatars.map((profile, index) => (
        <div className=" flex flex-row justify-center items-center">
          <img
            src={profile.img}
            className="h-8 w-8 rounded-full  "
            onClick={() => setAvatar(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default ChangeAvatar;
