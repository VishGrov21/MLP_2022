import { PaletteColor } from "@mui/material";

export interface TabsI {
  Economic?: TabsPropertyI,
  Social?: TabsPropertyI,
}

export interface TabsHeadI {
  tabhead: string,
  tabcontent: TabsContentI[],
}

export interface TabsPropertyI {
  tabdata: TabsHeadI[],
  color: PaletteColor,
  image: string
}

export interface TabsContentI {
  chartType?: string | boolean
  content?: string | boolean
  head?: string | boolean
}
