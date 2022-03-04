import { AppDispatch, AppThunk } from "state/store";
import { METRIC_TILES_DATA } from "state/actions/supplyMetrics/supplyMetrics.type";
import { SupplyMetricsActionType } from "./supplyMetrics.type";

import color from "styles/color";
import globeIcon from "assets/images/economicIcon.svg";
import socialIcon from "assets/images/socialIcon.svg";
import environmentIcon from "assets/images/environmentIcon.svg";

import { SupplyMetricsTabsI } from "model/supplyMetrics.model";

export const metricsDataSuccessActionCreator = (metricsData: SupplyMetricsTabsI[]): SupplyMetricsActionType => {
  return {
    type: METRIC_TILES_DATA,
    payload: metricsData,
  };
};

export const getMetricsData = (): AppThunk => {
  return async (dispatch:AppDispatch) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((resp) => {
        dispatch(metricsDataSuccessActionCreator(tabDatas));
      })
      .catch((error) => {
        console.error("Failure while fetching metrics data", error);
      });
  };
};

const tabDatas: SupplyMetricsTabsI[] = [
  { Economic: { 
      tabdata: [
        { tabhead: "Labour", 
          tabcontent: [
            { cardHead: "80%", cardContent: "Percentage of school aged children attending school", chartType: "pieChart" },
            {
              cardHead: "560",
              cardContent: "Number of farming households covered by CLM, CLMS, CLMRS",
              chartType: "pieChart",
            },
            { cardHead: "7", cardContent: "Number of unannounced inspections", chartType: "barChart" },
            { cardHead: "30%", cardContent: "Percentage of farming households where an inspection has occurred", chartType: "" },
            { cardHead: "3", cardContent: "Number of children identified in child labour through inspections", chartType: "" },
            { cardHead: "5%", cardContent: "Percentage of child labour cases remediated or referred", chartType: "barChart" },
          ] 
        },
        { tabhead: "Economic Prosperity", tabcontent: [] },
      ], 
      tabcolor: color.palette.orange, 
      image: globeIcon 
    } 
  },
  { Social: { 
      tabdata: [
        { tabhead: "Diversity and Inclusion ", tabcontent: [] },
        { tabhead: "Community", tabcontent: [] },
      ], 
      tabcolor: color.palette.red, 
      image: socialIcon 
    } 
  },
  { Environmental: { 
      tabdata: [
        { tabhead: "Climate ", tabcontent: [] },
        { tabhead: "Water", tabcontent: [] },
        { tabhead: "Land Use", tabcontent: [] },
        { tabhead: "Circularity ", tabcontent: [] },
      ], 
      tabcolor: color.palette.green, 
      image: environmentIcon 
    } 
  },
];
