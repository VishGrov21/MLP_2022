import { PaletteColor } from "@mui/material";

export interface TabsI {
  Economic?: TabsPropertyI;
  Social?: TabsPropertyI;
  Environmental?: TabsPropertyI;
}

export interface TabsHeadI {
  tabhead: string;
  tabcontent: TabsContentI[];
}

export interface TabsPropertyI {
  tabdata: TabsHeadI[];
  tabcolor: PaletteColor;
  image: string;
}

export interface TabsContentI {
  chartType?: string;
  cardContent?: string;
  cardHead?: string;
}
