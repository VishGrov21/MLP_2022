import { Box } from "@mui/material";
import { SettingsViewI, Settings_Authorized_RolesT } from "model/settings.model";
import ConfigLead from "pages/ConfigLead.page";
import { ADMIN, AUTHOR, CONFIG_LEAD, DATA_APPROVER, DATA_INPUTTER } from "./userDetails.constants";

export const SETTINGS_AUTHORIZED_ROLE_ARR: Settings_Authorized_RolesT[] = [
  ADMIN,
  CONFIG_LEAD,
  DATA_APPROVER,
  DATA_APPROVER,
  AUTHOR,
];

export const settingsViewArr: SettingsViewI[] = [
  {
    id: 1,
    name: "Configuration Lead View",
    path: "configuration-lead-view",
    role: CONFIG_LEAD,
    component: <ConfigLead />,
  },
  {
    id: 2,
    name: "Data Inputter View",
    path: "data-input-view",
    role: DATA_INPUTTER,
    component: <Box />,
  },
  {
    id: 3,
    name: "Data Approver View",
    path: "data-approver-view",
    role: DATA_APPROVER,
    component: <Box />,
  },
  {
    id: 4,
    name: "Authoring View",
    path: "author-view",
    role: AUTHOR,
    component: <Box />,
  },
];

export const PRODUCTS_CONFIG_LEAD_ARR = ["Coffee", "Palm"];
export const ORIGIN_CONFIG_LEAD_ARR = [
  "Brazil",
  "Colombia",
  "Congo (DRC)",
  "Guatemala",
  "Honduras",
  "India",
  "Indonesia",
  "Laos",
  "Mexico",
  "Nicaragua",
  "Peru",
  "Uganda",
  "Vietnam",
];

export const METRCIS_CONFIG_LEAD_ARR = [
  { name: "traceability", value: "Traceability Metrics" },
  { name: "sustainability", value: "Sustainability Metrics" },
];
