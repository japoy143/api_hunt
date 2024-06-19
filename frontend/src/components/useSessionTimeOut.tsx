import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/AuthSlice";
import { toast } from "sonner";

const useSessionTimeOut = (milliseconds: number) => {
  const isSession = useSelector(
    (state: RootState) => state.auth.isSessionTimeout,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let sessionId: number;

    if (!isSession) {
      sessionId = setTimeout(() => {
        dispatch(logout());
        toast.error("Session Expired");
        console.log("Refresh Token Expired");
      }, milliseconds);
    }

    return () => {
      clearTimeout(sessionId);
    };
  }, [dispatch, isSession, milliseconds]);
};

export default useSessionTimeOut;
