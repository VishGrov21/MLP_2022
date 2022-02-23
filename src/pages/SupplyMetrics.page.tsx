import MetricsCategory from "components/SupplyMetrics/SupplyMetrics.component";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import infoIcon from "assets/images/info.svg";
import UserProfileHeader from "components/common/UserProfileHeader.component";
import { theme }from "Themes/Theme.style";

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

const SupplyMetrics = () => {
  return (
    <>
      <UserProfileHeader />
      <MetricsContainer>
        <Heading>Metrics</Heading>

        <SubContent>
          <img src={infoIcon} alt='info-icon' />
          The metrics shown are aggregated across all of your suppliers and commodities. Use the filters to select
          specific data sets
        </SubContent>

        <MetricsCategory />
      </MetricsContainer>
    </>
  );
};

export default SupplyMetrics;
