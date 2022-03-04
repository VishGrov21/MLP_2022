import { userDetailsArr } from "constants/userDetails.constants";
import { UserStateI } from "model/user.model";
import { UserActionType, USER_LOGIN } from "state/actions/user/user.type";

const userInitState: UserStateI = {
  user: userDetailsArr[0],
};

export const userReducer = (state: UserStateI = userInitState, action: UserActionType): UserStateI => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
