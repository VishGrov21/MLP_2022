export interface TabsContentI {
  chartType?: string | boolean
  content?: string | boolean
  head?: string | boolean
}

export interface TabsI {
  tabhead: string;
  content: TabsContentI[]
}
