import { Box } from "@mui/material";
import {
  ChildLabourMetricsI,
  MetricsConfigManagerI,
  SettingsViewI,
  Settings_Authorized_RolesT,
} from "model/settings.model";
import ConfigLead from "pages/ConfigLead.page";
import { formatDate } from "utils/common";
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

export const METRICS_CONFIG_LEAD_ARR = [
  { name: "traceability", value: "Traceability Metrics" },
  { name: "sustainability", value: "Sustainability Metrics" },
];

export const IN_PROGRESS_C = "In Progress";
export const NOT_STARTED_C = "Not Started";
export const CONFIGURED_C = "Configured";

export const CONFIG_METRICS_MOCK_DATA: MetricsConfigManagerI[] = [
  {
    id: 55,
    product: "Coffee",
    origin: "Colombia",
    traceabilityStatus: IN_PROGRESS_C,
    sustainabilityStatus: NOT_STARTED_C,
    lastUpdated: formatDate("03/17/2022"),
  },
  {
    id: 105,
    product: "Palm",
    origin: "Brazil",
    traceabilityStatus: IN_PROGRESS_C,
    sustainabilityStatus: CONFIGURED_C,
    lastUpdated: formatDate("03/11/2022"),
  },
];

export const STARTING_POINT_ARR = ["FG1", "FG2", "FG3"];
export const CHILD_LABOUR_METRICS_ARR: ChildLabourMetricsI[] = [
  {
    id: 0,
    metricName: "Number of school aged children",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 1,
    metricName: "Number of school aged children attending school",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 2,
    metricName: "Number of farming households where an inspection has occured",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 3,
    metricName: "Number of farming households covered by CLM",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 4,
    metricName: "Number of farming households covered by CLMS",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 5,
    metricName: "Number of farming households covered by CLMRS",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 6,
    metricName: "Number of announced inspections",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 7,
    metricName: "Number of unannounced inspections",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 8,
    metricName: "Number of children identified in child labour through inspections",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
  {
    id: 9,
    metricName: "Number of child labour cases remediated or referred",
    unit: "#",
    rangeLow: "0",
    rangeHigh: "100",
    dataCollectionMethod: "screen",
  },
];
