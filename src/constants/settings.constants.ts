import { SettingsViewI, Settings_Authorized_RolesT } from "model/settings.model";
import { ADMIN, AUTHOR, CONFIG_LEAD, DATA_APPROVER, DATA_INPUTTER } from "./userDetails.constants";

export const SETTINGS_AUTHORIZED_ROLE_ARR: Settings_Authorized_RolesT[] = [ADMIN, CONFIG_LEAD, DATA_APPROVER, AUTHOR];

export const settingsViewArr: SettingsViewI[] = [
  {
    id: 1,
    name: "Configuration Lead View",
    path: "configuration-lead-view",
    role: CONFIG_LEAD,
  },
  {
    id: 2,
    name: "Data Inputter View",
    path: "data-input-view",
    role: DATA_INPUTTER,
  },
  {
    id: 3,
    name: "Data Approver View",
    path: "data-approver-view",
    role: DATA_APPROVER,
  },
  {
    id: 4,
    name: "Authoring View",
    path: "author-view",
    role: AUTHOR,
  },
];
