import { useDispatch } from "react-redux";
import { logout } from "../redux/AuthSlice";

function UserPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <p>User Login Successfully</p>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
}

export default UserPage;
