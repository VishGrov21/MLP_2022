import { ADMIN, CONFIG_LEAD, DATA_APPROVER } from "constants/userDetails.constants";

export type Settings_Authorized_RolesT = typeof ADMIN | typeof CONFIG_LEAD | typeof DATA_APPROVER;
