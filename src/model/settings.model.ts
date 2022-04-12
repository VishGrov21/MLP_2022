import { ADMIN, AUTHOR, CONFIG_LEAD, DATA_APPROVER, DATA_INPUTTER } from "constants/userDetails.constants";
import React from "react";

export type Settings_Authorized_RolesT =
  | typeof ADMIN
  | typeof CONFIG_LEAD
  | typeof DATA_APPROVER
  | typeof AUTHOR
  | typeof DATA_INPUTTER;

export interface ViewI {
  id: number;
  name: string;
  path: string;
  role: Settings_Authorized_RolesT;
  component: React.ReactNode;
}

export interface SettingsViewI extends ViewI {
  subView?: ViewI[];
}

export interface ConfigFormI {
  product: string;
  origin: string;
  metricsGroup: {
    traceability: boolean;
    sustainability: boolean;
  };
}

export type IN_PROGRESS = "In Progress";
export type NOT_STARTED = "Not Started";
export type CONFIGURED = "Configured";

export type MetricsConfigStatusT = IN_PROGRESS | NOT_STARTED | CONFIGURED;

export interface MetricsConfigManagerI {
  id: number;
  product: string;
  origin: string;
  traceabilityStatus: React.ReactNode | string;
  sustainabilityStatus: React.ReactNode | string;
  lastUpdated: string;
}

export interface UpdateConfigMetricsI {
  id: number;
  updateConfigMetricsGroup: {
    traceability: boolean;
    sustainability: boolean;
  };
}

export interface ConfigLeadStateI {
  configManager: MetricsConfigManagerI[];
  configuredData: ConfigFormI;
  updateConfigMetrics: UpdateConfigMetricsI;
  childLabourMetrics: ChildLabourMetricsI[];
}

export type ScreenT = "screen";
export type SourceT = "source";

export interface ChildLabourMetricsI {
  id: number;
  metricName: string;
  unit: string;
  rangeLow: string;
  rangeHigh: string;
  dataCollectionMethod: ScreenT | SourceT;
}

export type TraceabilityT = "traceability";
export type SustainabilityT = "sustainability";

export type EconimicT = "economic";
export type SocialT = "social";
export type EnvironmentT = "environment";

export type TypeT = [TraceabilityT, SustainabilityT];
export type CategoryT = [EconimicT, SocialT, EnvironmentT];
export interface SCFormI {
  product: string;
  origin: string;
  type: string;
  category?: string;
  file: string;
}

export interface SelectOptionsI {
  name: string;
  value: string;
}
