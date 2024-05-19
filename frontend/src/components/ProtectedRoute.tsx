import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useSelector((state: RootState) => state.auth.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === 0) {
      navigate("/", { replace: true });
    }
    if (user === 1) {
      navigate("/User");
    }
  }, [navigate, user]);

  return children;
}
