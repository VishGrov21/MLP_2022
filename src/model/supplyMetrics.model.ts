import { PaletteColor } from "@mui/material";

export interface SupplyMetricsTabsI {
  Economic?: SupplyMetricsTabsPropertyI;
  Social?: SupplyMetricsTabsPropertyI;
  Environmental?: SupplyMetricsTabsPropertyI;
}

export interface SupplyMetricsTabsHeadI {
  tabhead: string;
  tabcontent: SupplyMetricsTabsContentI[];
}

export interface SupplyMetricsTabsPropertyI {
  tabdata: SupplyMetricsTabsHeadI[];
  tabcolor: PaletteColor;
  image: string;
}

export interface SupplyMetricsTabsContentI {
  chartType?: string;
  cardContent?: string;
  cardHead?: string;
}
