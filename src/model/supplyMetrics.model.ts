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
  tabcolor: String;
  image: string;
}

export interface SupplyMetricsTabsContentI {
  chartType?: string;
  cardContent?: string;
  cardHead?: string;
}
