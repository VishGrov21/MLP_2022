import MetricsCategory from "components/SupplyMetrics/SupplyMetrics.component";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import infoIcon from "assets/images/info.svg";
import UserProfileHeader from "components/common/UserProfileHeader.component";
import { theme } from "Theme.style";
import globeIcon from "assets/images/economic.svg";
import socialIcon from "assets/images/socialIcon.svg";

import { TabsI, TabsHeadI, TabsContentI } from 'model/common.model';

const MetricsContainer = styled(Box)({
  padding: "30px",
  marginTop: "80px",
  marginLeft: "8%",
});

const Heading = styled("p")({
  fontSize: "30px",
  color: theme.palette.primary.main,
  margin: "0 0 10px 0",
  fontWeight: "bold",
});

const SubContent = styled(Stack)({
  flexDirection: "row",
  fontSize: "16px",
  color: theme.palette.greyShade.main,
  "& img": {
    paddingRight: "5px",
  },
});

const metricsData: TabsContentI[] = [
  { head: '80 %', content: 'Percentage of school aged children attending school', chartType: 'pieChart' },
  { head: 'Yes', content: 'Active CLMS in place', chartType: '' },
  { head: '50', content: 'Number of Farming Households in Farmer Group Covered by CLMS', chartType: '' },
  { head: '15', content: 'Number of unannounced inspections', chartType: 'barChart' },
  { head: '10 %', content: 'Percentage of Farming Households where an inspection has occurred', chartType: 'pieChart' },
  { head: '30', content: 'Number of children identified in child labour through inspections', chartType: '' },
  { head: '5 %', content: 'Percentage of child labour cases remediated or referred', chartType: 'barChart' }
];

const economic: TabsHeadI[] = [{ tabhead: 'Labour', tabcontent: metricsData }, { tabhead: 'economic', tabcontent: [] }];
const social: TabsHeadI[] = [{ tabhead: 'Diversity and Inclusion ', tabcontent: [] }, { tabhead: 'Community', tabcontent: [] }];
const tabItems: TabsI[] = [{ Economic: { tabdata: economic, color: theme.palette.orange, image: globeIcon } }, { Social: { tabdata: social, color: theme.palette.red, image: socialIcon } }];

const SupplyMetrics = () => {
  return (
    <>
      <UserProfileHeader />
      <MetricsContainer>
        <Heading>Metrics</Heading>

        <SubContent>
          <img src={infoIcon} alt="info-icon" />
          The metrics shown are aggregated across all of your suppliers and commodities. Use the filters to select
          specific data sets
        </SubContent>

        <MetricsCategory tabItems={tabItems} />
      </MetricsContainer>
    </>
  );
};

export default SupplyMetrics;
