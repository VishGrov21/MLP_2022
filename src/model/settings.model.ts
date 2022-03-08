import { ADMIN, AUTHOR, CONFIG_LEAD, DATA_APPROVER, DATA_INPUTTER } from "constants/userDetails.constants";

export type Settings_Authorized_RolesT =
  | typeof ADMIN
  | typeof CONFIG_LEAD
  | typeof DATA_APPROVER
  | typeof AUTHOR
  | typeof DATA_INPUTTER;

export interface SettingsViewI {
  id: number;
  name: string;
  path: string;
  role: Settings_Authorized_RolesT;
}
