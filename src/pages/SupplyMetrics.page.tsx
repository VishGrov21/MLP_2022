import MetricsCategory from "components/supplyMetrics/SupplyMetrics.component";
import { Box, Stack,Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import infoIcon from "assets/images/info.svg";
import color from "styles/color";
import globeIcon from "assets/images/economicIcon.svg";
import socialIcon from "assets/images/socialIcon.svg";

import { TabsI, TabsHeadI, TabsContentI } from "model/common.model";

const MetricsContainer = styled(Box)({
  padding: "30px 28px",
  marginTop: "80px",
});

const Heading = styled("div")({
  margin: "0 0 10px 0",
});

const SubContent = styled(Stack)({
  flexDirection: "row",
  fontSize: "16px",
  color: color.palette.greyShade.main,
  "& img": {
    paddingRight: "5px",
  },
});

const metricsData: TabsContentI[] = [
  { cardHead: '80 %', cardContent: 'Percentage of school aged children attending school', chartType: 'pieChart' },
  { cardHead: 'Yes', cardContent: 'Active CLMS in place', chartType: '' },
  { cardHead: '50', cardContent: 'Number of Farming Households in Farmer Group Covered by CLMS', chartType: '' },
  { cardHead: '15', cardContent: 'Number of unannounced inspections', chartType: 'barChart' },
  { cardHead: '10 %', cardContent: 'Percentage of Farming Households where an inspection has occurred', chartType: 'pieChart' },
  { cardHead: '30', cardContent: 'Number of children identified in child labour through inspections', chartType: '' },
  { cardHead: '5 %', cardContent: 'Percentage of child labour cases remediated or referred', chartType: 'barChart' }
];

const economic: TabsHeadI[] = [{ tabhead: 'Labour', tabcontent: metricsData }, { tabhead: 'Economic Prosperity', tabcontent: [] }];
const social: TabsHeadI[] = [{ tabhead: 'Diversity and Inclusion ', tabcontent: [] }, { tabhead: 'Community', tabcontent: [] }];
const tabDatas: TabsI[] = [{ Economic: { tabdata: economic, tabcolor: color.palette.orange, image: globeIcon } }, { Social: { tabdata: social, tabcolor: color.palette.red, image: socialIcon } }];

const SupplyMetrics = () => {
  return (
    <>
      <MetricsContainer>
        <Heading>
          <Typography variant="h1">Metrics</Typography>
        </Heading>
        <SubContent>
          <img src={infoIcon} alt="info-icon" />
          <Typography variant="body2">
              The metrics shown are aggregated across all of your suppliers and commodities. Use the filters to select specific data sets
          </Typography>
        </SubContent>

        <MetricsCategory tabDatas={tabDatas}/>
      </MetricsContainer>
    </>
  );
};

export default SupplyMetrics;
