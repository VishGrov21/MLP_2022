import { UserDetailsI } from "model/user.model";

export const USER_LOGIN = "user_login";

interface UserLoginActionType {
  type: typeof USER_LOGIN;
  payload: UserDetailsI;
}

export type UserActionType = UserLoginActionType;
