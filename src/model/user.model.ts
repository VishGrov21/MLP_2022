import { ADMIN, CONFIG_LEAD, CUSTOMER, DATA_INPUTTER, SUPPLIER } from "constants/userDetails.constants";

export interface UserDetailsI {
  id: number;
  name: string;
  email: string;
  password: string;
  company: string;
  jobTitle: string;
  mobile: number;
  role: [typeof ADMIN | typeof CONFIG_LEAD | typeof DATA_INPUTTER | typeof SUPPLIER | typeof CUSTOMER];
  isFirstTimeConfig: boolean;
}

export interface UserStateI {
  user: UserDetailsI;
}

export type UserDetailArrT = UserDetailsI[];
