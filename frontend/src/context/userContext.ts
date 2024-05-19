import { createContext } from "react";
import { UserStatus } from "../types";

export const UserContext = createContext<UserStatus | undefined>(undefined);
