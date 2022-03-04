import { UserDetailsI } from "model/user.model";
import { UserActionType, USER_LOGIN } from "./user.type";

export const userLoginACtionCreator = (userData: UserDetailsI): UserActionType => {
  return {
    type: USER_LOGIN,
    payload: userData,
  };
};
